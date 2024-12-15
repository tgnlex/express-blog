import database from '../library/sqlite.ts';
import type Sqlite3 from 'better-sqlite3';
import sql from 'library/sql/index.ts';
import { ITable } from 'library/types/interface.ts';
import type { Article } from 'library/types/models.ts';
import Table from 'src/modules/db-table.ts';
const table = new Table("articles", "title, content");
class QueryController {
  db: Sqlite3.Database = undefined;
  table: ITable = undefined;
  constructor(db, table: ITable) {
    this.db = db;
    this.table = table;
  }
  insert = async (data: any) => {
    const values = [...data]
    const stmt = this.db.prepare(sql.insert(this.table.name, table.fields));
    await stmt.run(values);
  };
  all = async () => {
    const stmt = this.db.prepare(sql.all(this.table.name))
    const rows = await stmt.run();
    if (rows) { return rows }; 
  };
  byId = async(id: string | number) => {
    const stmt = this.db.prepare(sql.getById(this.table.name, id))
    const rows = await stmt.run();
    if (rows) { return rows };
  };
  byTitle = async (title: string) => {
    const stmt = this.db.prepare(sql.getByField(this.table.name, "title", title));
    const rows = await stmt.run();
    if (rows) { return rows };
  };
};

export default QueryController;