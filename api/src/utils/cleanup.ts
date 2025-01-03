import log from "@/modules/logger";
import tags from "@/library/templates/tags";
import { SIGT } from "@/constants";
let {proc, serverProc} = tags;


const cleanup = (instance) => {  
  let sigterm = proc(`${SIGT} signal received. Closing http server.`)
  log.main(sigterm)
  instance.close(() => {
    let shutdown = serverProc(`HTTP Server is offline..!`);
    log.main(shutdown)
  });
};

export default cleanup;