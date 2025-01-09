import { Server as HTTP } from "http";
import { onClose } from "./callbacks";
import sigterm from "./constants";
import log from "./logging";

type Cleanup = (instance: HTTP) => void;
const cleanup: Cleanup = (instance: HTTP) => {  
  log.proc.signal(sigterm);
  instance.close(() => onClose());
};

export default cleanup;