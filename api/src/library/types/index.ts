import type {RequestHandler} from 'deptypes';
type Port = number | string;
type Plugins = RequestHandler[];
type UriPrefix = "http" | "https"| "file" | "ftp" | 
                 "imap" | "nntp" | "nntp" | "irc" | 
                 "acap" | "icap" | "mtqp" | "wss" | "ws";

  export { 
    UriPrefix, 
    Plugins,
    Port, 
  };