import Roles from "@/library/enums/auth-roles.ts"
import type {Id} from '@/library/types/alias.ts';

type Role = Roles.USER | Roles.MOD | Roles.ADMIN;

interface User {
  id: Id;
  email: string;
  username: string;
  password: string; // hashed
  role: Role;
}

type Guest = User & { role: Roles.USER };
type Moderator = User & { role: Roles.MOD };
type Admin = User & { role: Roles.ADMIN };

export type { User, Role}
export type { Guest, Moderator, Admin };