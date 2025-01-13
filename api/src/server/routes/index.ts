import {Router} from 'express';
import userRouter from './users.ts';
import postRouter from './posts.ts';
import subsRouter from './subscribers.ts';

const router = Router();

router.get('/', (req, res) => {
    res.json({ status: "running", code: 200 });
});

router.use('/subscribers', subsRouter);
router.use('/posts', postRouter);
router.use('/users', userRouter);


export default router;
  