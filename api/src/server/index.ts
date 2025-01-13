import Server from 'src/modules/server/index.ts';
import config from 'config/server.ts';
import router from './routes/index.ts';
import errorHandler from 'config/server/error.ts';
const server = new Server(config);

server.initialize();
server.setMainRouter(router);

server.use(server.handlers.logger);
server.use(server.handlers.client);
server.use(server.handlers.except);

export default server;