import type {Plugin, Middleware} from "@/library/types/alias.ts"
import { UriPrefix } from "@/library/types/literals.ts";
import type RedisCache from '@/modules/redis/constructor.ts';
type ErrHandler = (err, req, res, next) => void;
interface ConfigVars {
  name: string;
  host: string;
  port: number;
  node: string;
  mail: string;
  version?: string;
  rtprefix?: string;
  protocol?: UriPrefix;
};
interface AppServices { redis?: RedisCache; }
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
export type { Config, ConfigVars };
export type { AppHandlers, AppServices };