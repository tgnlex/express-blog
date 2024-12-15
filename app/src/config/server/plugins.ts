import express, {urlencoded, json} from 'express';
import { __static } from 'library/variables.ts';
const plugins = [
  express.urlencoded({extended: true}),
  express.json(),
  express.static(__static)
];

export default plugins;