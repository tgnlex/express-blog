import query from "library/query"
let ok = 200;
const db = query.subscribers;
const controller = {
  create: async (req, res, next) => {
    let email = req.body.email;
    await db.insert([email]);
    res.status(ok);
  },
  all: async (req, res, next) => {
    const subscribers = await db.all();
    if (!subscribers) { res.status(494).json({message: "Not Found."})};
    res.status(ok).json(subscribers);
  }, 
  id: async (req, res, next) => {
    const id = Number(req.params.id);
    const subscriber = await db.byId(id);
    if (!subscriber) { res.status(404).json({message: "Not Found."})}
    res.status(ok).json(subscriber);  
  }
};

export default controller;