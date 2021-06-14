export type Nullable<T> = T | undefined | null;

export enum UserRole {
  super = 'Super',
  standard = 'Standard'
}

export interface AuthResponse {
  success: boolean;
  role: string;
}

export interface AuthUserOptions {
  username: string;
  password: string;
}

export interface CreateUserOptions {
  username: string;
  password: string;
  role: string;
}
