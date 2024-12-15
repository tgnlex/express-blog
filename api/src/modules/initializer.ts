import type { Express as App, RequestHandler } from "express"
import {Config} from 'library/types/interface.ts';
import {express} from 'deps';
import {startMsg} from 'library/literals.ts';
class Server {
  public app: App;
  public name: string;
  public host: string;
  public port: number | string;
  public address: string;
  public email: string;
  public log_level: string;
  public node_env: string;
  private startup: string;
  private plugins: any[];
  private router: any;
  constructor(config: Config, router?) {
    this.app = express();
    this.name = config.name;
    this.host = config.host;
    this.port = config.port;
    this.email = config.email;
    this.node_env = config.node_env;
    this.log_level = config.log_level;
    this.plugins = config.plugins;
    if (config.prefix) { this.startup = startMsg(`${config.prefix}://${this.host}:${this.port}`)}
    if (!config.prefix) { this.startup = startMsg(`http://${this.host}:${this.port}`)}
    this.router = router; 
    
  }
  /*** PRIVATE METHODS ***/
  
  private Variables = () => {
    this.app.set('trust proxy', 1);
    this.app.set('name', this.name);
    this.app.set('host', this.host);
    this.app.set('port', this.port);
    this.app.set('email', this.email);
    this.app.set('log level', this.log_level);
    this.app.set('node env', this.node_env);
  }
  private Plugins = () => {
    this.plugins.map((plugin: RequestHandler) => ( this.app.use(plugin) ))
  }
  private Router = () => {
    if (this.router) this.app.use(this.router);
  }
  private startupLog = () => console.info(this.startup);

  /*** PUBLIC METHODS ***/
  public addRoutes(...routes) {
    routes.forEach((route) => this.app.use(route));
  }
  public init() {
    this.Variables();
    this.Plugins();
    this.Router();
  }
  public listen = () => this.app.listen(this.port, () => this.startupLog());
}

export default Server;