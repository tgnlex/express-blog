import type { 
  Config, ConfigVars, AppHandlers, AppServices, Version 
} from "./config";
import type { UriPrefix } from "@/library/types/literals";
import type {Plugin, Middleware} from "@/library/types/alias";


interface ServerVars extends ConfigVars { address?: string };

export type { Config, ConfigVars, Version, ServerVars };
export type { Plugin, Middleware, UriPrefix };
export type { AppHandlers, AppServices };
