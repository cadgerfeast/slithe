// Helpers
import path from 'path';
import fs from 'fs';
import { DefaultTheme, defineConfig } from 'vitepress';
import { createJiti } from 'jiti';
import { PlaygroundNode, defaultPlaygroundNode, isPlaygroundNode } from '../src/node.js';
// Constants
const jiti = createJiti(import.meta.url);
const userNodeConfig = path.resolve(process.cwd(), './.slithe/node.ts');
const userClientConfig = path.resolve(process.cwd(), './.slithe/client.ts');
const userPlaygroundDir = path.resolve(process.cwd(), './.slithe/playground');
const userPublicDir = path.resolve(userPlaygroundDir, './public');

let nodeConfig: PlaygroundNode = defaultPlaygroundNode;
if (fs.existsSync(userNodeConfig)) {
	const mod = await jiti.import(userNodeConfig);
	if (typeof mod === 'object' && 'playground' in mod && isPlaygroundNode(mod.playground)) {
		nodeConfig = mod.playground;
	}
}

const alias = {};
if (fs.existsSync(userClientConfig)) {
	alias['../slithe/client.js'] = userClientConfig;
}

const nav: DefaultTheme.NavItem[] = [
	{
		text: 'Guide',
		link: '/guide/components/actions',
		activeMatch: '/guide/'
	}
];
const socialLinks: DefaultTheme.SocialLink[] = [];
const defaultSidebar: Record<string, DefaultTheme.SidebarItem[]> = {
	'/guide/': [
		{
			text: 'Components',
			collapsed: false,
			items: [
				{ text: 'Actions', link: '/guide/components/actions' },
				{ text: 'Avatar', link: '/guide/components/avatar' },
				{ text: 'Blankslate', link: '/guide/components/blankslate' },
				{ text: 'Breadcrumbs', link: '/guide/components/breadcrumbs' },
				{ text: 'Button', link: '/guide/components/button' },
				{ text: 'Card', link: '/guide/components/card' },
				{ text: 'Flash', link: '/guide/components/flash' },
				{
					text: 'Form',
					link: '/guide/components/form',
					collapsed: false,
					items: [
						{
							text: 'Input',
							collapsed: false,
							items: [
								{ text: 'Checkbox', link: '/guide/components/form/input/checkbox' },
								{ text: 'Number', link: '/guide/components/form/input/number' },
								{ text: 'Text', link: '/guide/components/form/input/text' }
							]
						}
					]
				},
				{ text: 'Hud', link: '/guide/components/hud' },
				{ text: 'Icon', link: '/guide/components/icon' },
				{ text: 'Keyboard', link: '/guide/components/keyboard' },
				{ text: 'Popover', link: '/guide/components/popover' },
				{ text: 'Splitter', link: '/guide/components/splitter' },
				{ text: 'Spinner', link: '/guide/components/spinner' },
				{ text: 'Tabs', link: '/guide/components/tabs' },
				{ text: 'Tooltip', link: '/guide/components/tooltip' },
			]
		}
	]
};

function computeSidebar () {
	const sidebar = nodeConfig.sidebar ? nodeConfig.sidebar(defaultSidebar) : defaultSidebar;
	const num = path.relative(path.resolve(__dirname, 'src'), process.cwd()).split('..').length + 3;
	sidebar[`${new Array(num).join('../')}guide/`] = sidebar['/guide/'];
	return sidebar;
}

function walkSync (dir: string, callback: (filePath: string) => void) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    var filepath = path.join(dir, file);
    const stats = fs.statSync(filepath);
    if (stats.isDirectory()) {
      walkSync(filepath, callback);
    } else if (stats.isFile()) {
      callback(filepath);
    }
  });
};

function computeDynamicRoutes () {
	const dynamicRoutes: string[] = [
		'guide/getting-started',
		'guide/api/add-notification'
	];
	if (fs.existsSync(userPlaygroundDir)) {
		walkSync(userPlaygroundDir, (file) => {
			const dynamicRoute = path.relative(userPlaygroundDir, file).replace(/\\/g, '/');
			if (dynamicRoute.endsWith('.md')) {
				dynamicRoutes.push(dynamicRoute.slice(0, -3));
			}
		});
	}
	return dynamicRoutes;
}

const favicon = nodeConfig.favicon ?? 'favicon.svg';

process.env.SLITHE_PLAYGROUND_DYNAMIC_ROUTES = computeDynamicRoutes().join(',');
process.env.SLITHE_PLAYGROUND_FAVICON = favicon;

export default defineConfig({
	title: 'Slithe',
	cleanUrls: true,
	srcDir: './.vitepress/src',
	head: [
		['link', { rel: 'icon', href: `/${favicon}`}],
	],
	themeConfig: {
		logo: `/${favicon}`,
		nav: nodeConfig.nav ? nodeConfig.nav(nav) : nav,
		socialLinks: nodeConfig.socialLinks ? nodeConfig.socialLinks(socialLinks) : socialLinks,
		sidebar: computeSidebar(),
		search: {
			provider: 'local'
		}
	},
	vite: {
		define: {
			SLITHE_PLAYGROUND_FAVICON: `"${favicon}"`
		},
		publicDir: fs.existsSync(userPublicDir) ? userPublicDir : 'public',
		plugins: [{
			name: 'slithe:node',
			enforce: 'pre',
			load (id) {
				const resolvedUserPaths = [
					path.resolve(userNodeConfig, '../playground', path.relative(path.resolve(__dirname, 'src'), id)),
					path.resolve(userNodeConfig, '../playground', `.${id}`)
				];
				for (const resolvedUserPath of resolvedUserPaths) {
					if (fs.existsSync(resolvedUserPath)) {
						return fs.readFileSync(resolvedUserPath, 'utf8');
					}
				}
			}
		}],
		resolve: {
			dedupe: ['vue'],
			alias
		}
	},
	vue: {
		template: {
			compilerOptions: {
				isCustomElement: (tag) => {
					return tag.toLowerCase().startsWith('sl-');
				}
			}
		}
	}
});
