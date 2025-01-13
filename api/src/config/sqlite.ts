import sqlite3 from 'sqlite3';
import {open} from 'sqlite';

const connect = async(path) => {
  const db = await open({
    driver: sqlite3.Database,
    filename: path
  });
  return db;
};

export default connect;