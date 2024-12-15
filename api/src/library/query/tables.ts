import Table from "src/modules/db-table";

const tables = {
  article: new Table("article", "title, content, likes"),
  subs: new Table("subscribers", "email")
};

export default tables;