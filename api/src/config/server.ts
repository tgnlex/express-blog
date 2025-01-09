import env from "env"
import plugins from "./server/plugins.ts";
import redis from "@/services/redis/index.ts";
import errorHandler from "./server/error.ts";
import {query} from "@/services/pglite/index.ts";
import type { Config, ConfigVars } from "@/modules/server/interface/index.ts";
let vmajor: 1;
let vminor: 0;
let vpatch: 0;
const vars: ConfigVars = {
  name: "api",
  version: `${vmajor}.${vminor}.${vpatch}`,
  protocol: "http",
  rtprefix: "/api",
  host: env.HOST,
  port: env.PORT,
  mail: env.MAIL,
  node: env.NODE,  
}
const config: Config = {
  vars: vars,
  plugins: [...plugins],
  middlewares: [],
  services: {
    redis: redis,
    pg: query,
  },
  handlers: {
    logger: errorHandler.logger,
    client: errorHandler.client,
    except: errorHandler.except,
  }
}
export default config;
export type {Config};