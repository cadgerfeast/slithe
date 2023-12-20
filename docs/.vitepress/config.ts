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
						{ text: 'Button', link: '/guide/components/button' },
						{ text: 'Blankslate', link: '/guide/components/blankslate' },
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
				{ text: 'Themes', link: '/guide/themes' }
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
