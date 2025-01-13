import log from "./logging.ts";
type ListenData = { address: string, version: string };
const onListen = (data: ListenData, error?: Error) => {
  if (error) { throw error };
  log.server.info(`Server listening on ${data.address}`);    
  log.server.info(`Server API Version: ${data.version}`);
};
type OnClose = () => void;
const onClose: OnClose = () => log.main.info('Http server is offline.');


export {onListen, onClose}