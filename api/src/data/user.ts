import Roles from "@/library/enums/auth-roles"
import type {Id} from '@/library/types/alias';

type Role = Roles.USER | Roles.MOD | Roles.ADMIN;

interface IUser {
  id: Id;
  email: string;
  username: string;
  password: string; // hashed
  role: Role;
}

type Guest = IUser & { role: Roles.USER };
type Moderator = IUser & { role: Roles.MOD };
type Admin = IUser & { role: Roles.ADMIN };

export type { IUser, Role}
export type { Guest, Moderator, Admin };