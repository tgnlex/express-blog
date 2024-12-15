import query from "library/query"
let ok = 200;
const db = query.articles;
const controller = {
  create: async (req, res, next) => {
    const {title, content} = req.body;
    await db.insert([title, content, 0]);
    res.status(ok);
  },
  all: async (req, res, next) => {
    const articles = await db.all();
    if (!articles) { res.status(494).json({message: "Not Found."})};
    res.status(ok).json(articles);
  }, 
  id: async (req, res, next) => {
    const id = Number(req.params.id);
    const article = await db.byId(id);
    if (!article) { res.status(404).json({message: "Not Found."})}
    res.status(ok).json(article);  
  }
};

export default controller;