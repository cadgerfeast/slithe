export type PlaygroundClient = {
	setTheme: (theme: 'light'|'dark') => void;
};

export function definePlaygroundClient (playgroundClient: PlaygroundClient) {
	return playgroundClient;
}
