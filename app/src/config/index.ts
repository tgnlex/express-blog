import env from "env"
import plugins from "./server/plugins.ts";
import handlers from "./server/handlers.ts";
import globalMiddleware from "./server/global-mw.ts";
import type {Port, Plugins, Handlers, UriPrefix} from '../types/aliases.ts';
import type { RequestHandler, Router } from 'express';
import type { Config } from "./interface.ts";

const config: Config = {
  vars: {
    name: "App Server",
    prefix: "http",
    host: env.HOST,
    port: env.PORT, 
    email: env.MAIL,
    node_env: env.NODE,
    log_level: env.LOGL,
  },
  plugins: plugins,
  middleware: globalMiddleware,
  handlers: handlers,
  router: undefined
};

export default config;
