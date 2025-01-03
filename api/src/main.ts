import process from 'process';
import server from './server/index.ts';
import tags from './library/templates/tags.ts';
import log from './modules/logger/index.ts';
import cleanup from './utils/cleanup.ts';

async function main() {
  log.main('running main loop');
  const instance = server.listen();
  process.on('SIGTERM', () => cleanup(instance))
  
}



