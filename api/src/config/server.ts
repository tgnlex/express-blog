import env from "env"
import type { Config } from "library/types/interface.ts";
import plugins from "./plugins.ts";
const config: Config = {
  name: "main api",
  host: env.HOST,
  port: env.PORT,
  email: env.MAIL,
  log_level: env.LOGL,
  node_env: env.NODE,
  plugins: [...plugins]
}
export default config;