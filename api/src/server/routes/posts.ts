import PostController from "../controllers/posts.ts";
import { Router } from "express";
import db from "@/database.ts";
const postRouter = Router();
const controller = new PostController(db);

postRouter.get('/', async (req, res) => {
  const result = await controller.getAll();
  if (!result) res.status(400).json({error: "Data not found."});
  res.status(200).json({result});
});
postRouter.post('/create', async (req, res) => {
  const {title, content} = req.body;
  const result = await controller.create({title, content});
  if (!result) res.status(400).json({message: "Request Failed."});
  res.status(200).json({message: "Success!"})
});
postRouter.get('/:id', async (req, res) => {
  const id = Number(req.params.id);
  const result = await controller.getById(id);
  if (!result) res.status(400).json({message: "Request Failed"})
  res.status(200).json({result});
});
postRouter.post('/:id/update', async(req, res) => {
  const id = Number(req.params.id);
  const {title, content} = req.body;
  const result = await controller.update(id, {title, content});
  if (!result) res.status(400).json({error: "Request Failed."});
  res.status(200).json({message: "Success!"})
});
postRouter.delete('/:id/delete', async(req, res) => {
  const id = Number(req.params.id);
  const result = await controller.remove(id);
  if (!result) res.status(400).json({error: "Request Failed."});
  res.status(200).json({message: "Success!"})
});
export default postRouter;