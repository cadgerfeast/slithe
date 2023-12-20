export async function notify (msg: string) {
	const { addNotification } = await import('slithe');
	addNotification({
		type: 'info',
		icon: {
			name: 'info',
			size: '16px'
		},
		message: msg
	});
}
