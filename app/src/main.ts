import server from './server/index.ts';

async function main() {
  console.log('running main')
  await server.start();
};

try {
  main()
} catch (e) {
  console.error(e);
}