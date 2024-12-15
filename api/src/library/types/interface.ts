import type {Port, UriPrefix, Plugins} from './index.ts';
type Config = {
  name?: string;
  host: string;
  port: Port;
  log_level: string; 
  node_env: string;
  email?: string;
  prefix?: UriPrefix;
  plugins: Plugins;
}
type EnvVars = {
  HOST: string;
  PORT: number; 
  LOGL: string;
  MAIL: string;
  NODE: string;
}

export {Config, EnvVars};