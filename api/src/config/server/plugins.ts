import {json, urlencoded} from 'express';

const plugins = [
  urlencoded({extended: true}),
  json(),
];

export default plugins;