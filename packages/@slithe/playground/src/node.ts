import { DefaultTheme } from 'vitepress/theme';

export type PlaygroundNode = {
	favicon?: string;
	nav?: (defaultNav: DefaultTheme.NavItem[]) => DefaultTheme.NavItem[];
	socialLinks?: (defaultSocialLinks: DefaultTheme.SocialLink[]) => DefaultTheme.SocialLink[];
	sidebar?: (defaultTheme: Record<string, DefaultTheme.SidebarItem[]>) => Record<string, DefaultTheme.SidebarItem[]>;
};

export const defaultPlaygroundNode: PlaygroundNode = {};

export function definePlaygroundNode (playgroundNode: PlaygroundNode) {
	return playgroundNode;
}

export function isPlaygroundNode (toCheck: unknown): toCheck is PlaygroundNode {
	return true;
}
