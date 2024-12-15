import {Router} from 'deps';
import {articles} from 'server/data/articles.ts';
import type {Req, Res} from 'deptypes';
const router = Router();

router.get('/posts', (req: Req, res: Res) => {
    res.setHeader("Content-Type", "application/json");
    res.json({articles});
});

export default router;
  