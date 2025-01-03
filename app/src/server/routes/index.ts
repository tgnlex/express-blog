import {Router} from 'express';
import blog from './blog/index.ts';
import pages from "./page/index.ts";

const routes = [blog, pages];


export default routes;