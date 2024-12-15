import Database from 'better-sqlite3'


function connect(uri: string) {
  console.info(`[API]: initializing db at ${uri}`)
  const db = new Database(uri)
  return db;
};

export default connect;