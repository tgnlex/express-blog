import type { 
  Config, ConfigVars, AppHandlers, AppServices 
} from "./config.ts";
import type { UriPrefix } from "@/library/types/literals.ts";
import type {Plugin, Middleware} from "@/library/types/alias.ts";


interface ServerVars extends ConfigVars { address?: string };

export type { Config, ConfigVars, ServerVars };
export type { Plugin, Middleware, UriPrefix };
export type { AppHandlers, AppServices };
