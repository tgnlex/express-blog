import SubsController from '../controllers/subscribers.ts';
import { Router } from 'express';
import db from '@/database.ts';
const controller = new SubsController(db);
const subsRouter = Router();

subsRouter.get('/', async (req, res) => {
  const result = await controller.getAll();
  if (!result) { res.status(400).json({error: "Data not found."})};
  res.status(200).json({result});
});

subsRouter.post('/create', async (req, res) => {
    const { email } = req.body;
    const result = await controller.create(email);
    if (!result) { res.status(400).json({message: "Request failed"})}
});
subsRouter.get('/:id', async (req, res) => {
    const id = Number(req.params.id);
    const result = await controller.getById(id);
    if (!result) { res.status(400).json({message: "Request failed"})}
    res.status(200).json({result});
});

subsRouter.post('/:id/update', (req, res) => {
    const id = Number(req.params.id);
    const email = req.body.email;
    const result = controller.update(id, email);
    if (!result) {res.status(400).json({error: "Request Failed"})};
    res.status(200).json({message: "Success!"})
});

subsRouter.delete('/:id/delete', async(req, res) => {
  const id = Number(req.params.id);
  const result = await controller.remove(id);
  if (!result) { res.status(400).json({error: "Request failed."})};
  res.status(200).json({message: "Success!"})
});

export default subsRouter;