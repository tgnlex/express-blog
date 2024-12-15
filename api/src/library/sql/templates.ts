type Id = string | number;
type Value = string | number | boolean | null;
const byId = (id: Id) => `WHERE id = ${id}`;
const byField = (field: string, value: Value) => `WHERE ${field} = ${value}`;
const insert = (table, values) => `INSERT INTO ${table} VALUES (${values})`;
const all = table => `SELECT * FROM ${table}`;
const getFields = (table, fields) => `SELECT ${fields} from ${table}`;

export {
  byId, 
  byField, 
  all, 
  getFields
}