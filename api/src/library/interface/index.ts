import { 
  Request as ExpressRequest, 
  Response as ExpressResponse, 
  Express, 
  RequestHandler 
} from "express";

interface Application extends Express{ };
interface Request extends ExpressRequest {};
interface Response extends ExpressResponse {};
interface Handler extends RequestHandler {};


export type {
  Application,
  Request,
  Response,
  Handler
}