import type {Port, Plugins, Handlers, UriPrefix} from '../types/aliases.ts';
import type { RequestHandler, Router } from 'express';


interface Config {
  vars: {
    name?: string;    
    prefix?: UriPrefix;
    host: string;
    port: Port;
    log_level: string; 
    node_env: string;
    email?: string;
  },
  plugins?: Plugins;
  middleware?: RequestHandler[];
  handlers?: Handlers;
  router?: Router;
}
export { Config };  