import connect from "./config/sqlite.ts";
import paths from "./utils/paths.ts";
const url = `${paths.db}/main.db`
const db = await connect(url);

db.on('trace', (data) => console.info('[SQLITE]: ERROR: ', data))

export default db;