import { definePlaygroundNode } from '@slithe/playground/node';

export const playground = definePlaygroundNode({
	nav: () => {
		return [
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
		];
	},
	socialLinks: () => {
		return [
			{ icon: 'github', link: 'https://github.com/cadgerfeast/slithe' }
		];
	},
	sidebar: (defaultSidebar) => {
		defaultSidebar['/guide/'] = [
			{
				text: 'Introduction',
				collapsed: false,
				items: [
					{ text: 'Getting Started', link: '/guide/getting-started' }
				]
			},
			...defaultSidebar['/guide/'],
			{
				text: 'API',
				collapsed: false,
				items: [
					{ text: 'setConfig', link: '/guide/api/set-config' },
					{ text: 'setTheme', link: '/guide/api/set-theme' }
				]
			}
		];
		return defaultSidebar;
	}
});
