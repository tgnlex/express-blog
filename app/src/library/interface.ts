import type {Port, Plugins, Handlers, UriPrefix} from './types/aliases.ts';
interface EnvVars {
  HOST: string, 
  PORT: number, 
  NODE: string, 
  LOGL: string, 
  MAIL: string;
  API: { HOST: string, PORT: number }
};
interface Config {
  name?: string;
  host: string;
  port: Port;
  log_level: string; 
  node_env: string;
  email?: string;
  prefix?: UriPrefix;
  plugins?: Plugins;
  handlers?: Handlers;
}

export { EnvVars, Config };