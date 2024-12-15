import {Router} from 'express';
import {articles} from 'server/data/articles.ts';
import type {Req, Resp} from 'extension';
const router = Router();

router.get('/posts', (req: Req, res: Resp) => {
    res.setHeader("Content-Type", "application/json");
    res.json({articles});
});

export default router;
  