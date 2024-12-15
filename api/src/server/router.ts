import {Router} from 'deps';
import apiRoutes from './routes/index.ts';
const router = Router();

router.get('/', (req, res) => {
  res.json({
    status: "running",
    code: 200
  })
})

router.use('/api', apiRoutes)


export default router;