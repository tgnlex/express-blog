import type {Port, Plugins, Handlers, UriPrefix} from '../types/aliases.ts';
import type { RequestHandler } from 'express';
interface EnvVars {
  HOST: string, 
  PORT: number, 
  NODE: string, 
  LOGL: string, 
  MAIL: string;
  API: { HOST: string, PORT: number }
};


export { EnvVars };