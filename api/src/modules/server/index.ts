import type {ServerVars, AppHandlers, AppServices, Config} from "./interface/index.ts";
import { Express } from "express";
import express, { Router } from 'express';
import {listening} from 'library/templates/index.ts';
import tags from "@/library/templates/tags.ts";
import { Middleware, Plugin } from "@/library/types/alias.ts";
import { fmtAddr } from "@/utils/fmt.ts";
import Logger from "../logger/constructor.ts";

class Server {
  protected app: Express;
  protected api: Router;
  protected vars: ServerVars;
  protected plugins: Plugin[];
  public globalwares: Middleware[];
  public handlers: AppHandlers;
  public services: AppServices;
  public routers: Router[];
  public log = new Logger({level: "info", tag: tags.server});
  constructor(config: Config) {
    this.app = express();
    this.vars = config.vars;
    this.vars.address = fmtAddr(this.vars, config.vars.protocol);
    this.handlers = config.handlers;
    this.services = config.services;
    this.plugins = config.plugins;
    this.globalwares = config.middlewares;
  }
  /*** METHODS ***/
  public use = (handler) => this.app.use(handler);
  public get = (key) => this.app.get(key);
  public set = (key, val) => this.app.set(key, val);
  public route = (router: Router, prefix: string) => this.app.use(prefix, router);
  public logVersion = () => this.log.info(`Version: ${this.vars.version}`);
  public logMessage = () => this.log.info(this.vars.address);
  protected setLocals = () => {
    let v = this.vars;
    this.app.locals.name = v.name;
    this.app.locals.host = v.host;
    this.app.locals.port = v.port;
    this.app.locals.mail = v.mail;
    this.app.locals.nenv = v.node;
    this.app.locals.version = v.version;
  };
  protected setVariables = () => {
    let v = this.vars;
    this.set('trust proxy', 1);
    this.set('name', v.name);
    this.set('host', v.host);
    this.set('port', v.port);
    this.set('mail', v.mail);
    this.set('node', v.node);
  };
  protected setPlugins = () => {
    this.plugins.forEach((plugin: Plugin) => this.use(plugin) );
  };
  protected setGlobalware = () => {
    this.globalwares.forEach((mw: Middleware) => this.use(mw))
  };
  public setMainRouter = (router: Router) => {
    this.api = router;
    this.route(router, this.vars.rtprefix);
  };

  public initialize() {
    this.setVariables();
    this.setLocals();
    this.setPlugins();
    this.setGlobalware();
  };
  
  protected start = (error: Error) => {
    if (error) { throw error };
    this.logMessage();    
    this.logVersion();
  };

  public listen = () => {
    /// @ts-ignore
    return this.app.listen(this.vars.port, (err) => this.start(err));
  }
}
export default Server;