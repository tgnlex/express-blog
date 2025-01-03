import type {Plugin, Middleware} from "@/library/types/alias"
import { UriPrefix } from "@/library/types/literals";
import type RedisCache from '@/services/redis/constructor';
type Version = `${number}.${number}.${number}`;
type ErrHandler = (err, req, res, next) => void;
interface ConfigVars {
  name: string;
  host: string;
  port: number;
  node: string;
  mail: string;
  version?: Version;
  rtprefix?: string;
  protocol?: UriPrefix;
};
interface AppServices { redis?: RedisCache; pg?: any; }
interface AppHandlers {
  logger?: ErrHandler;
  client?: ErrHandler;
  except?: ErrHandler;
}
interface Config  {
  vars: ConfigVars;
  services: AppServices;
  handlers: AppHandlers;
  middlewares: Middleware[];  
  plugins: Plugin[];
};
export type { Version, Config, ConfigVars };
export type { AppHandlers, AppServices };