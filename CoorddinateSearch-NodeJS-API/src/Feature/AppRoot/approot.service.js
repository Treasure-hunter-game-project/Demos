function approotMessage() {
	return {
		message: 'WELOME ON API',
		routes: [
			{
				name: 'coordinate',
				description: 'Get coordinate from databse by a sended coordinate',
				path: '/coordinate',
				request: {
					method: 'POST',
					body: { latitude: 'number | string', longitude: 'number | string' },
				},
				response: {
					200: {
						youSent: {
							latitude: 'number | string',
							longitude: 'number | string',
						},
						weFound: [
							{
								id: 'number',
								name: 'string',
								latitude: 'number',
								longitude: 'number',
							},
						],
					},
				},
			},
		],
	};
}

module.exports = { approotMessage };
