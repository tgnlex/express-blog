import tags from "@/library/templates/tags";
import { SIGT } from "@/constants";
import Logger from "@/modules/logger/constructor";

const log = {
  proc: new Logger({level: 'signal', tag: tags.proc}),
  main: new Logger({level: 'info', tag: tags.main})
};
const offline = () => log.main.info('Http server is offline.');
const sigterm = `${SIGT} signal received... Preparing for shutdown!`;

const cleanup = (instance) => {  
  log.proc.signal(sigterm)

  instance.close(() => offline());
};

export default cleanup;