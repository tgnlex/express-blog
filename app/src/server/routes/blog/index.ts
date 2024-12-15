import {Router} from 'express';
import data from '@/server/data';
import render from 'config/eta';
import api from 'library/api/blog.ts';

const router = Router();

router.get('/blog', async (req, res) => {
  data.blog.articles = await api.getPosts();
  res.send(render('blog/index', data.blog));
});


router.get('/blog/:id', async (req, res) => {
  data.view_article = await api.findPost(req);
  res.send(render('blog/article', data.view_article))
});

export default router;
