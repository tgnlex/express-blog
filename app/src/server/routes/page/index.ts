import {Router} from 'express';
import data from '@/server/data';
import render from 'config/eta';
const router = Router();


router.get('/', (req, res) => {
  const template = render('index', data.home);
  res.send(template);
});

router.get("/about", (req, res) => {
  const template = render('about/index', data.about)  
  res.send(template);
});

export default router;