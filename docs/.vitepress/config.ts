// Helpers
import { defineConfig } from 'vitepress';

export default defineConfig({
	title: 'Slithe',
	cleanUrls: true,
	srcDir: './src',
	head: [
		['link', { rel: 'icon', href: '/favicon.svg'}],
	],
	themeConfig: {
		logo: '/favicon.svg',
		nav: [
			{
				text: 'Guide',
				link: '/guide/getting-started',
				activeMatch: '/guide/'
			},
			{
				text: 'Links',
				items: [
					{
						text: 'Contributing',
						link: 'https://github.com/cadgerfeast/slithe/blob/main/CONTRIBUTING.md'
					},
					{
						text: 'Changelog',
						link: 'https://github.com/cadgerfeast/slithe/blob/main/CHANGELOG.md'
					}
				]
			}
		],
		socialLinks: [
      { icon: 'github', link: 'https://github.com/cadgerfeast/slithe' }
    ],
		sidebar: {
			'/guide/': [
				{
					text: 'Introduction',
					collapsed: false,
					items: [
						{ text: 'Getting Started', link: '/guide/getting-started' }
					]
				},
				{
					text: 'Components',
					collapsed: false,
					items: [
						{ text: 'Avatar', link: '/guide/components/avatar' },
						{ text: 'Blankslate', link: '/guide/components/blankslate' },
						{ text: 'Button', link: '/guide/components/button' },
						{ text: 'Card', link: '/guide/components/card' },
						{
							text: 'Form',
							link: '/guide/components/form/input/checkbox',
							collapsed: false,
							items: [
								{
									text: 'Input',
									link: '/guide/components/form/input/checkbox',
									collapsed: false,
									items: [
										{ text: 'Checkbox', link: '/guide/components/form/input/checkbox' },
										{ text: 'Number', link: '/guide/components/form/input/number' },
										{ text: 'Text', link: '/guide/components/form/input/text' }
									]
								}
							]
						},
						{ text: 'Icon', link: '/guide/components/icon' },
						{ text: 'Keyboard', link: '/guide/components/keyboard' },
						{ text: 'Layout', link: '/guide/components/layout' },
						{ text: 'Splitter', link: '/guide/components/splitter' },
						{ text: 'Tabs', link: '/guide/components/tabs' }
					]
				},
				{
					text: 'API',
					collapsed: false,
					items: [
						{ text: 'addNotification', link: '/guide/api/add-notification' },
						{ text: 'attachTooltip', link: '/guide/api/attach-tooltip' },
						{ text: 'setConfig', link: '/guide/api/set-config' },
						{ text: 'setTheme', link: '/guide/api/set-theme' }
					]
				},
				{
					text: 'Themes',
					collapsed: false,
					items: [
						{ text: 'Primer', link: '/guide/themes/primer' },
						{ text: 'Pixel', link: '/guide/themes/pixel' }
					]
				}
			]
		},
		search: {
			provider: 'local'
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
