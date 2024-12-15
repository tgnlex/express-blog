import {getFields, byField, byId, all} from "./templates.ts";
const fieldsById = (table, fields, id) => `${getFields(table, fields)} ${byId(id)}`;
const getById = (table, id) => `${all(table)} ${byId(id)}`;
const getByField = (table, field, value) => `${all(table)} ${byField(field, value)}`

const insert = (table, values) => `INSERT INTO ${table} VALUES (${values})`;


const sql = {
  insert: insert, 
  fieldsById: fieldsById,
  all: all,
  getById: getById, 
  getByField: getByField
};

export default sql;