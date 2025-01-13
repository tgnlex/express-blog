import { Database, Statement } from 'sqlite';
class SubsController {
  constructor(private db: Database) {}
  async create(subscriber): Promise<any> {
    const { email } = subscriber;
    const sql = `INSERT INTO subscribers (title, content, views, likes) VALUES (?, ?, ?, ?)`;
    const result = await this.db.run(sql, [ email ]);
    if (result.lastID) {
      const createdSub = await this.getById(result.lastID);
      return createdSub;
    } else {
      throw new Error('Failed to create Subscriber.')
    }
  }
  async getAll(): Promise<any[] | undefined> {
    const sql = `SELECT * FROM subscribers`;
    const rows = await this.db.get(sql);
    return rows as any[] | undefined;
  }
  async getById(id: number): Promise<any | undefined> {
    const sql = `SELECT * FROM subscribers WHERE id = ?`;
    const row = await this.db.get(sql, [id]);
    return row as any | undefined;
  }
  async update(id: number, email: string): Promise<any | undefined> {
    const sql = `UPDATE subscribers SET email = ? WHERE id = ?`;
    const result = await this.db.run(sql, [email, id]);
    if (result.changes > 0) {
      return true;
    } else {
      throw new Error('Subscriber not found or update failed.')
    }
  }
  async remove(id: number): Promise<boolean> {
    const sql = 'DELETE FROM subscribers WHERE id = ?';
    const result = await this.db.run(sql, [id]);
    if (result.changes === 0) {
      throw new Error('Post not found or deletion failed.')
    }
    return true;
  }
};

export default SubsController;