import {resolve} from 'path';
import {__pg} from '../constants.ts';
import * as pg from '@electric-sql/pglite';

const db = new pg.PGlite(__pg);

export default db;