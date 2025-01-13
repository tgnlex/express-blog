import { Router } from "express";
import UserController from "../controllers/users.ts";
import db from "@/database.ts";

const userRouter = Router();
const controller = new UserController(db)

userRouter.get('/', async (req, res) => {
  const result = await controller.getAll();
  if (!result) { res.status(400).json({error: "Data not found."})};
  res.status(200).json({result});
});
userRouter.post('/create', async (req, res) => {
    const {username, email, hashed_password, age, role } = req.body;
    const result = await controller.create({username, email, hashed_password, age, role});
    if (!result) res.status(400).json({message: "Request Failed."});
    res.status(200).json({message: "Success!"})
});
userRouter.get('/:id', async (req, res) => {
  const id = Number(req.params.id);
  const result = await controller.getById(id);
  if (!result) { res.status(400).json({message: "Request failed"})};
  res.status(200).json({result});
});

userRouter.post('/:id/update/username', async(req, res) => {
  const id = Number(req.params.id);
  const result = await controller.updateName(id, req.body.username)
  if (!result) { res.status(400).json({message: "Request failed"})};
  res.status(200).json({message: "Success!"})
});

userRouter.post('/:id/update/email', async(req, res) => {
  const id = Number(req.params.id);
  const result = controller.updateEmail(id, req.body.email)
  if (!result) { res.status(400).json({message: "Request failed"})};
  res.status(200).json({message: "Success!"})
});

userRouter.post('/:id/update/pass', async(req, res) => {
  const id = Number(req.params.id);
  const result = await controller.updatePassword(id, req.body.password)
  if (!result) { res.status(400).json({message: "Request failed"})};
  res.status(200).json({message: "Success!"})
});

userRouter.post('/:id/update/role', async(req, res) => {
  const id = Number(req.params.id);
  const result = await controller.updateRole(id, req.body.role)
  if (!result) { res.status(400).json({message: "Request failed"})};
  res.status(200).json({message: "Success!"})
});

userRouter.delete('/:id/delete', async(req, res) => {
  const id = Number(req.params.id);
  const result = await controller.remove(id);
  if (!result) { res.status(400).json({error: "Request failed."})};
  res.status(200).json({message: "Success!"})
});

export default userRouter;