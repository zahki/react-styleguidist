import server from '../server';
import getConfig from '../config';

jest.mock('../create-server', () => () => {
	return {
		app: {
			listen: (port: number, host: string, cb: () => void) => cb(),
			close: (cb: () => void) => cb(),
		},
		compiler: {},
	};
});

test('server should return an object containing a server instance', () => {
	const config = getConfig();
	const callback = jest.fn();
	const serverInfo = server(config, callback);

	expect(callback).toBeCalled();
	expect(serverInfo.app).toBeTruthy();
	expect(serverInfo.compiler).toBeTruthy();
	expect(typeof serverInfo.app.listen).toBe('function');
	expect(typeof serverInfo.app.close).toBe('function');
});
