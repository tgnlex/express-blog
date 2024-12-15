import type { Article } from "library/models.ts";

const postOne: Article = {
  id: 1, 
  title: "Hello World",
  content: "Welcome to my website, this is my first post"
}
const postTwo: Article = {
  id: 2, 
  title: "Site Recipe", 
  content: `This website was made using the following: \n\n 
  1. Typescript (Language) \n 
  2. NodeJS  (Runtime) \n 
  3. Express (Backend framework) \n 
  4. ETA (templating engine) \n
  `
}
const articles: Article[] = [ postOne, postTwo ];
  
export {articles};