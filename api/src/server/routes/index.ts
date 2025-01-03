import {Router} from 'express';
import {articles} from 'server/data/articles.ts';
import {Request, Response} from 'express';
const router = Router();

router.get('/posts', (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.json({articles});
});

export default router;
  