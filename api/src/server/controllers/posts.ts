import { Database, Statement } from 'sqlite';
import { Post, PostMutation } from '../models/article.ts';
class PostController {
  constructor(private db: Database) {}
  async create(post): Promise<Post> {
    const { title, content, views = 0, likes = 0 }: Post = post;
    const sql = `INSERT INTO posts (title, content, views, likes) VALUES (?, ?, ?, ?)`;
    const result = await this.db.run(sql, [title, content, views, likes]);
    if (result.lastID) {
      const createdPost = await this.getById(result.lastID);
      return createdPost;
    } else {
      throw new Error('Failed to create post.')
    }
  }
  async getAll(): Promise<Post[] | undefined> {
    const sql = `SELECT * FROM posts`;
    const rows = await this.db.get(sql);
    return rows as Post[] | undefined;
  }
  async getById(id: number): Promise<Post | undefined> {
    const sql = `SELECT * FROM posts WHERE id = ?`;
    const row = await this.db.get(sql, [id]);
    return row as Post | undefined;
  }
  async update(id: number, updatedData: PostMutation): Promise<PostMutation | undefined> {
    const { title, content } = updatedData;
    const sql = `UPDATE posts SET title = ?, content = ? WHERE id = ?`;
    const result = await this.db.run(sql, [title, content]);
    if (result.changes > 0) {
      return updatedData;
    } else {
      throw new Error('Post not found or update failed.')
    }
  }
  async remove(id: number): Promise<boolean> {
    const sql = 'DELETE FROM posts WHERE id = ?';
    const result = await this.db.run(sql, [id]);
    if (result.changes === 0) {
      throw new Error('Post not found or deletion failed.')
    }
    return true;
  }
};

export default PostController;