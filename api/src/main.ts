import api from './server/app.ts';

async function main() {
  console.info('running main')
  await api.listen();
}


try {
  main();
} catch (e) {
 console.error(e);
}
