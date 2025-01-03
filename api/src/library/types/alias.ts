import type{ Router, RequestHandler, Express } from 'express';;
import Server from 'src/modules/server';
type Id = string | number;
type Value = string | number | boolean | null;
type Handler = RequestHandler;
type Plugin = RequestHandler;
type Middleware = RequestHandler;

type Service = Router | Express | Server;
export { 
    Plugin,
    Middleware,
    Service,
    Handler,
    Value, 
    Id
  };