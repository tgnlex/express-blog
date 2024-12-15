import dbPath from "config/paths";
import connect from "config/database";

const database = {
  blog: connect(dbPath.blog),
  subs: connect(dbPath.subs)
}

export default database;