import type { Config } from "library/interface.ts";
import env from "env"
import plugins from "./server/plugins.ts";
import handlers from "./server/handlers.ts";
const config: Config = {
  name: "App Server",
  prefix: "http",
  host: env.HOST,
  port: env.PORT, 
  email: env.MAIL,
  node_env: env.NODE,
  log_level: env.LOGL,
  plugins: plugins,
  handlers: handlers
}

export default config;