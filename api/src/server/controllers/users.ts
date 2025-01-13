import { Database, Statement } from 'sqlite';
class UserController {
  constructor(private db: Database) {}
  async create(user): Promise<any> {
    const { username, email, hashed_password, age, role } = user;
    const sql = `INSERT INTO users (username, email, hashed_password, age, role) VALUES (?, ?, ?, ?, ?)`;
    const result = await this.db.run(sql, [username, email, hashed_password, age, role]);
    if (result.lastID) {
      const createdUser = await this.getById(result.lastID);
      return createdUser;
    } else {
      throw new Error('Failed to create user.')
    }
  }
  async getAll(): Promise<any[] | undefined> {
    const sql = `SELECT * FROM users`;
    const rows = await this.db.get(sql);
    return rows as [] | undefined;
  }
  async getById(id: number): Promise<any | undefined> {
    const sql = `SELECT * FROM users WHERE id = ?`;
    const row = await this.db.get(sql, [id]);
    return row as {} | undefined;
  }
  async updateName(id: number, new_username: string): Promise<any | undefined> {
    const sql = `UPDATE users SET username = ? WHERE id = ?`;
    const result = await this.db.run(sql, [new_username, id]);
    if (result.changes > 0) {
      return true;
    } else {
      throw new Error('User not found or update failed.')
    }
  }
  async updateEmail(id: number, new_email: string): Promise<any | undefined> {
    const sql = `UPDATE users SET email = ? WHERE id = ?`;
    const result = await this.db.run(sql, [new_email, id]);
    if (result.changes > 0) {
      return true;
    } else {
      throw new Error('User not found or update failed.')
    }
  }
  async updatePassword(id: number, new_hash: string): Promise<{} | undefined> {
    const sql = `UPDATE users SET hashed_password = ? WHERE id = ?`;
    const result = await this.db.run(sql, [new_hash, id]);
    if (result.changes > 0) {
      return true;
    } else {
      throw new Error('User not found or update failed.')
    }
  }
  async updateRole(id: number, new_role: string): Promise<{} | undefined> {
    const sql = `UPDATE users SET role = ? WHERE id = ?`;
    const result = await this.db.run(sql, [new_role, id]);
    if (result.changes > 0) {
      return true;
    } else {
      throw new Error('User not found or update failed.')
    }
  }
  async remove(id: number): Promise<boolean> {
    const sql = 'DELETE FROM posts WHERE id = ?';
    const result = await this.db.run(sql, [id]);
    if (result.changes === 0) {
      throw new Error('User not found or deletion failed.')
    } else {
      return true;
    }
  }
};

export default UserController;