import { Express } from "express";
import type { App, ReqHandler } from "../../library/types/alias.ts";
import express, { Router } from 'express';
import {address, listening} from 'library/templates/index.ts';
import tags from "library/templates/tags.ts";
import type {ServerVars, Version} from "./interface.ts";
import type { Config } from "config/server.ts";
import { Middleware, Plugin, Service } from "@/library/.ts";
class Server {
  protected app: Express;
  protected vars: ServerVars;
  protected address: string;
  protected message: string;
  protected plugins: Plugin[];
  protected globalwares: Middleware[];
  protected mainRouter: Router;
  protected sideRouters: Router[];
  protected services: Service[];
  protected routingPrefix: '/api'
  constructor(config: Config) {
    this.app = express();
    this.vars.version = config.version;
    this.vars.name = config.name;
    this.vars.host = config.host;
    this.vars.port = config.port;
    this.vars.email = config.email;
    this.vars.node = config.node;
    this.plugins = config.plugins;
    this.globalwares = config.middlewares;
    if (config.protocol) { 
      let prefix = config.protocol;
      this.address = address(prefix, this.vars.host, this.vars.port);
    } else { 
      this.address = address("http", this.vars.host, this.vars.port)
    };
    this.message = tags.api(listening(this.address))
  }
  /*** PRIVATE METHODS ***/
  public use = (handler) => this.app.use(handler);
  public get = (key) => this.app.get(key);
  public set = (key, val) => this.app.set(key, val);
  public logVersion = () => {
    const vmsg = tags.server(`Version:  ${this.vars.version}`);
    console.info(vmsg);
  }

  public setLocals = () => {
    let v = this.vars;
    this.app.locals.name = v.name;
    this.app.locals.host = v.host;
    this.app.locals.port = v.port;
    this.app.locals.email = v.email;
    this.app.locals.environemnt = v.node;
    this.app.locals.versin = v.version;

  }
  public setVariables = () => {
    this.set('trust proxy', 1);
    this.set('name', this.vars.name);
    this.set('host', this.vars.host);
    this.set('port', this.vars.port);
    this.set('email', this.vars.email);
    this.set('node env', this.vars.node);
  }
  public setPlugins = () => {
    this.plugins.forEach((plugin: ReqHandler) => this.use(plugin) );
  }
  public setGlobalware = () => {
    this.globalwares.forEach((mw: Middleware) => this.use(mw))
  }
  public setMainRouter = (router: Router) => {
    this.mainRouter = router;
    this.app.use(this.routingPrefix, router);
  }

  public initialize() {
    this.setVariables();
    this.setLocals();
    this.setPlugins();
    this.setGlobalware();
  }

  protected logMessage = () => {
    console.info(this.message)
  };
  protected start = (error: Error) => {
    if (error) {
      throw error;
    }
    this.logMessage();    
    this.logVersion();
  }
  public listen = () => {
    /// @ts-ignore
    return this.app.listen(this.vars.port, this.start(error));
  }
}
export default Server;