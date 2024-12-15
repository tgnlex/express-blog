import type {RequestHandler} from 'express';
type Port = number | string;
type Plugins = RequestHandler[];
type Handlers = any[];
type UriPrefix = "http" | "https"| "file" | "ftp" | 
                 "imap" | "nntp" | "nntp" | "irc" | 
                 "acap" | "icap" | "mtqp" | "wss" | "ws";

  export { 
    UriPrefix,
    Handlers, 
    Plugins,
    Port, 
  };