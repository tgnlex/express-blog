interface IArticle {
    id: number;
    title: string; 
    content: string;
    likes: number;
    views: number;
}
interface ArticleMutation {
    id?: number;
    title?: string;
    content?: string;
    likes?: number;
    views?: number;
}
export {IArticle};
  