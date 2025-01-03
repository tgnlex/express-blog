import path, {resolve} from 'path';
export const __dirname = import.meta.dirname;
export const __src = resolve(__dirname);
export const __root = resolve(__dirname, '../');
export const __pglite = resolve(__root, './postgres');
export const __file = resolve(__root, '/file');
export const __storage = resolve(__root, './storage');
export const __scripts = resolve(__root, './scripts');

const paths = {
  src: __src,
  root: __root,
  pglite: __pglite,
  file: __file,
  storage: __storage,
  scripts: __scripts
};
export default paths;