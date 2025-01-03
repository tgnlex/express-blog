import paths from '../paths.ts';
import * as pg from '@electric-sql/pglite';

const db = new pg.PGlite(paths.pglite);

export default db;