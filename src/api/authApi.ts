import { axiosInstance } from './axiosInstance';
import type { AuthResponse, LoginData, RegisterData, User } from '../types/auth';

export const authApi = {
  async login(data: LoginData) {
    return (await axiosInstance.post<AuthResponse>('/auth/login', data)).data;
  },
  async register(data: RegisterData) {
    return (await axiosInstance.post<AuthResponse>('/auth/register', data)).data;
  },
  async getCurrentUser() {
    return (await axiosInstance.get<User>('/auth/me')).data;
  },
};
