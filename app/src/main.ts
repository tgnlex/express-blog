import server from './server/index.ts';

async function main() {
  console.log('running main')
  await server.listen();
};

try {
  main()
} catch (e) {
  console.error(e);
}