import tags from "@/library/templates/tags";
import type { LogData } from "./interface";
const { main, api, lib, auth, info, proc, server, service, error } = tags;
const logIt = console.log;
const logIn = console.info;
const logEr = console.error;
const log = {  
  api:  (...data: LogData) => logIn( api(...data)),
  lib:  (...data: LogData) => logIn( lib(...data)),  
  main: (...data: LogData) => logIn(main(...data)),
  info: (...data: LogData) => logIn(info(...data)),
  proc: (...data: LogData) => logIn(proc(...data)),
  auth: (...data: LogData) => logIn(auth(...data)),
  server: (...data: LogData) => logIn(server(...data)),
  srvice: (...data: LogData) => logIn(service(...data)),
  error:  (...data: LogData) => logEr(error(...data)),
  err: {
    server: (...data) => log.error(server(...data)),
    srvice: (...data) => log.error(service(...data)),
    main: (...data) => log.error(main(...data)),
    auth: (...data) => log.error(auth(...data)),
    proc: (...data) => log.error(proc(...data)),
    api: (...data) => log.error(api(...data)),
    lib: (...data) => log.error(lib(...data))
  }
};

export default log;