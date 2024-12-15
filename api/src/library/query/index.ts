import QueryController from "src/modules/query-controller";
import tables from "./tables";
import database from "library/sqlite";


const query = {
  articles: new QueryController(database.blog, tables.article),
  subscribers: new QueryController(database.subs, tables.subs)
};

export default query;
