import {Router} from 'express';
import routes from './routes/index.ts';
const router = Router();

router.get('/', (req, res) => {
  res.json({
    status: "running",
    code: 200
  })
})

router.use(routes);


export default router;