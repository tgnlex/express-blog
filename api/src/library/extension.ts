import {RequestHandler, Request, Response, Express} from "express";

interface App extends Express {}

interface ReqHandler extends RequestHandler {}

interface Req extends Request {}

interface Resp extends Response {};


export { App, Req, Resp, ReqHandler };
