import db from "config/pglite.js";

const insert = async(table, ...values: string[]) => {
  const stmt = `INSERT INTO ${table} VALUES ${values}`;
  const result = await db.query(stmt);
  return result;
};
const destroy = async(table, id) => {
  const stmt = `DELETE FROM ${table} WHERE id = ${id}`;
  const result = await db.query(stmt);
  return result
};
const selectAll = async(table) => {
  const stmt = `SELECT * FROM ${table}`;
  const result = await db.query(stmt);
  return result;
};
const selectIf = async(table, condition) => {
  const stmt = `SELECT * FROM ${table} WHERE ${condition}`;
  const result = await db.query(stmt);
  return result;
};
const selectBy = async(table, key, value) => {
  const stmt = `SELECT * FROM ${table} WHERE ${key} = ${value}`
  const result = await db.query(stmt);
  return result;
};
const selectById = async(table, id) => {
  const stmt = `SELECT * FROM ${table} WHERE id = ${id}`;
  const result = await db.query(stmt);
  return result;
};
const field = async(table, fields) => {
  const stmt = `SELECT ${fields} FROM ${table}`;
  const result = await db.query(stmt);
  return result;
};
const fieldIf = async(table, fields, condition) => {
  const stmt = `SELECT ${fields} FROM ${table} WHERE ${condition}`;
  const result = await db.query(stmt);
  return result;
};
const fieldBy = async(table, fields, key, value) => {
  const stmt = `SELECT ${fields} from ${table} WHERE ${key} = ${value}`;
  const result = await db.query(stmt);
  return result;
};
const fieldById = async(table, fields, id) => {
  const stmt = `SELECT ${fields} FROM ${table} where id = ${id}`;
  const result = await db.query(stmt);
  return result;
};

const query = {
  all: selectAll,
  destroy: destroy,
  insert: insert,
  getIf: selectIf,
  getBy: selectBy,
  getById: selectById,
  fieldIf: fieldIf,
  fieldBy: fieldBy,
  fieldById: fieldById,
};

export default query;