import Server from 'initializer';
import config from 'config/server.ts';
import router from 'routes/index.ts';
const server = new Server(config, router);

server.init();


export default server;