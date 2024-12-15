import connect from "config/database.ts";
import dbPath from "config/paths";


function script() {
  const db = connect(dbPath.blog);
  return db;
}

script();