import type { Express, RequestHandler } from "express"
import type { Config }  from "config/interface.ts";
import express, {Router} from 'express';
import {listening} from '@/library/literals';
import {type AppVars} from "./variables";
import {defaults, setVars} from "./variables";
class Server {
  public app: Express;
  public vars: AppVars = defaults;
  private message: string;
  private plugins: RequestHandler[] = [];
  private handlers: RequestHandler[] = [];
  private middleware: RequestHandler[] = [];
  private router: any;
  constructor(config: Config) {
    this.app = express();
    this.vars = config.vars;
    this.plugins = config.plugins;
    this.handlers = config.handlers;
    this.middleware = condig.middleware
    if (config.vars.prefix) { this.message = listening(`${config.vars.prefix}://${this.vars.host}:${this.vars.port}`)}
    if (!config.vars.prefix) { this.message = listening(`http://${this.vars.host}:${this.vars.port}`)}
  }
  /*** PRIVATE METHODS ***/
  
  private Variables = () => setVars(this.app, this.vars);
  private Plugins = () => {
    this.plugins.forEach((plugin: RequestHandler) => this.app.use(plugin))
  }
  public Router = (routes: Router[]) => {
    const router = express.Router();
    routes.forEach((route) => {router.use(route)})
    this.app.use("/v1/", router);
  }
  private Handlers = () => {
    this.handlers.forEach((handler: RequestHandler) => this.app.use(handler))
  }
  private initStatus = () => console.info(this.message, {status: "Running"});
  /*** PUBLIC METHODS ***/
  public addRouter(router) {
    this.app.use(router);
  }
  public globals() {
    this.Variables();
    this.Plugins();
    this.Middleware()
  }
  public init() {

  }
  public listen = () => {
    this.app.listen(this.vars.port, () => this.initStatus());
  };
}

export default Server;