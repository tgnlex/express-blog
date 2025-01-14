import type {TagData} from "../../modules/logger/interface/data.ts";
const tags = {
  none: (...data: TagData) => `${data}`,
  api:   (...data: TagData) => `[API] ${data}`,
  lib:   (...data: TagData) => `[LIB] ${data}`,
  info:  (...data: TagData) => `[INFO] ${data}`,
  auth:  (...data: TagData) => `[AUTH] ${data}`,
  admin: (...data: TagData) => `[ADMIN] ${data}`,
  event: (...data: TagData) => `[EVENT] ${data}`,
  redis: (...data: TagData) => `[REDIS] ${data}`, 
  conf:  (...data: TagData) => `[CONFIG] ${data}`,
  sqlite:    (...data: TagData) => `[SQLITE] ${data}`,
  service:  (...data: TagData) => `[SERVICE] ${data}`,
  main: (...data: TagData) => `[MAIN] ${data}`,
  server: (...data: TagData) => `[SERVER] ${data}`,
  status: (...data: TagData) => `[STATUS] ${data}`,
  proc: (...data: TagData) => `[PROCESS] ${data}`,
  router: (...data: TagData) => `[ROUTER] ${data}`,
  apirouter: (...data: TagData) => tags.api(tags.router(data)),                                                                                                                                                                                                                                                                                                                                                                                      
  mainproc: (...data: TagData) => tags.main(tags.proc(data)),
  serverProc: (...data: TagData) => tags.server(tags.proc(data)),
  mainServer: (...data: TagData) => tags.main(tags.server(data)),
};

export default tags;