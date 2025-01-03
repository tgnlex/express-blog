import Server from '@/server/modules/initializer';
import config from '@/config';
import routes from 'routes/index.ts';

const server = new Server(config);
server.globals();
server.Router(routes);

export default server;