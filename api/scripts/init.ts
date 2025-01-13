import sqlite3 from 'sqlite3';
import {resolve} from 'path';
import Database from 'better-sqlite3';
const url = resolve(import.meta.dirname, '../database/main.db');
const db = new Database(url);
db.pragma('journal_mode = WAL');
