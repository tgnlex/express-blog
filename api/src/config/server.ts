import env from "env"
import plugins from "./server/plugins.ts";
import redis from "@/modules/redis/index.ts";
import errorHandler from "./server/error.ts";
import type { Config, ConfigVars } from "@/modules/server/lib/interface/index.ts";

const vars: ConfigVars = {
  name: "api",
  version: `1.0.0`,
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
  },
  handlers: {
    logger: errorHandler.logger,
    client: errorHandler.client,
    except: errorHandler.except,
  }
}
export default config;
export type {Config};