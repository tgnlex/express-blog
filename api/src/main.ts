import server from './server/index.ts';
import tags from './library/templates/tags.ts';
import { SIGT } from './constants.ts';
import Logger from './modules/logger/constructor.ts';
const log = new Logger({level: 'debug', tag: tags.main})


async function main() {
  log.info('running main loop');
  await server.start().catch((err) => {
    log.error(err);
  })
}

main();



