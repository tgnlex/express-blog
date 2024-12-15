import Server from 'initializer';
import config from 'config/server.ts';
import router from './router.ts';

const api = new Server(config, router);
api.init();

export default api;