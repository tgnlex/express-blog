import type {Port, UriPrefix, Plugins} from './index.ts';
interface Config  {
  name?: string;
  host: string;
  port: Port;
  log_level: string; 
  node_env: string;
  email?: string;
  prefix?: UriPrefix;
  plugins: Plugins;
}
interface EnvVars  {
  HOST: string;
  PORT: number; 
  LOGL: string;
  MAIL: string;
  NODE: string;
}
interface ITable {
  name: string;
  fields: string;
}
export {Config, EnvVars, ITable};