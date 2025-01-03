import data from "data/index.ts";
import {__api} from '../constants.ts';
const getPosts = async () => {
  const response = await fetch(`${__api}/posts`);
  const data = await response.json();
  return data;
}
const findPost = (req) => {
  const id = Number(req.params.id);
  return data.blog.articles[id -1];
}

const api = {
  getPosts: getPosts, 
  findPost: findPost,
}

export { getPosts, findPost };
export default api;

