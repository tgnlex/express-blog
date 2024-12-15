import {json, urlencoded} from 'express';
const plugins = [
  json(),
  urlencoded({extended: true})
];

export default plugins;