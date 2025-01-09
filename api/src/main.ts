import process from 'process';
import server from './server/index.ts';
import tags from './library/templates/tags.ts';
import cleanup from './utils/cleanup.ts';
import { SIGT } from './constants.ts';
import Logger from './modules/logger/constructor.ts';
const log = new Logger({level: 'debug', tag: tags.main})
function start() {
  const instance = server.listen();
  process.on(SIGT, () => cleanup(instance));
}

async function main() {
  log.info('running main loop');
  try {start()} 
  catch (err) {
    log.error(err);
  }
}

main();



