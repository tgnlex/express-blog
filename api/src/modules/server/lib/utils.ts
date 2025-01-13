import { Server as HTTP } from "http";
import { onClose } from "./callbacks.ts";
import { SIGTERM_LOG } from "@/constants.ts";
import log from "./logging.ts";

type Cleanup = (instance: HTTP) => void;
const cleanup: Cleanup = (instance: HTTP) => {  
  log.proc.signal(SIGTERM_LOG);
  instance.close(() => onClose());
};

export default cleanup;