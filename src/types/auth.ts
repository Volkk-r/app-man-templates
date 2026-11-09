export type User = { id: number; name: string; email: string };
export type AuthResponse = { user: User; token: string };
export type LoginData = { email: string; password: string };
export type RegisterData = LoginData & { name: string };
