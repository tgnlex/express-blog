import type{ Router, RequestHandler, Express } from 'express';;
import Server from '@/modules/server/index.ts';
type Id = string | number;
type Value = string | number | boolean | null;
type Handler = RequestHandler;
type Plugin = RequestHandler;
type Middleware = RequestHandler;
type Service = Router | Express | Server;
type Application = Express;
export { 
    Plugin,
    Middleware,
    Application,
    Service,
    Handler,
    Value, 
    Id
  };