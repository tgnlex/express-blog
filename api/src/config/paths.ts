import {resolve} from 'path';
import {__db} from "variables";

const dbPath = {
  blog: resolve(__db, 'articles.db'),
  subs: resolve(__db, 'subscribers.db') 
};


export default dbPath;




