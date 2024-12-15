import Server from 'initializer';
import config from 'config/server.ts';
import router from 'routes/index.ts';
import errorHandler from './utils/handlers';
const server = new Server(config, router);
server.init();

server.app.use(errorHandler);

export default server;