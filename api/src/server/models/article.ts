interface Post {
    id: number;
    title: string; 
    content: string;
    views: number;
    likes: number;
};
interface PostMutation {
    id?: number;
    title?: string;
    content?: string;
    views?: number;
    likes?: number;
};
export {Post, PostMutation};
  