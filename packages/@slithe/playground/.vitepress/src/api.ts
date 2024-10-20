export async function notify (msg: string, severity = 'info') {
	const { addNotification } = await import('slithe');
	let iconName = 'info';
	switch (severity) {
		case 'success': {
			iconName = 'check-circle';
			break;
		}
		case 'warn': {
			iconName = 'stop';
			break;
		}
		case 'error': {
			iconName = 'alert';
			break;
		}
	}
	addNotification({
		type: severity,
		icon: {
			name: iconName,
			size: '16px'
		},
		message: msg
	});
}
