import {Router} from 'express';
import blog from './blog/index.ts';
import pages from "./page/index.ts";
const router = Router();


router.use(blog);
router.use(pages);

export default router;