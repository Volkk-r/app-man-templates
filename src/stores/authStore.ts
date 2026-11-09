import { makeAutoObservable, runInAction } from 'mobx';
import { authApi } from '../api/authApi';
import { getErrorMessage } from '../api/axiosInstance';
import type { LoginData, RegisterData, User } from '../types/auth';

class AuthStore {
  user: User | null = null;
  isLoading = false;
  isReady = false;
  error = '';

  constructor() {
    makeAutoObservable(this);
    window.addEventListener('auth:expired', () => this.logout());
  }

  async restoreSession() {
    if (!localStorage.getItem('token')) { this.isReady = true; return; }
    try {
      const user = await authApi.getCurrentUser();
      runInAction(() => { this.user = user; });
    } catch (error) {
      runInAction(() => { this.error = getErrorMessage(error); });
    } finally {
      runInAction(() => { this.isReady = true; });
    }
  }

  async login(data: LoginData) {
    this.isLoading = true; this.error = '';
    try {
      const result = await authApi.login(data);
      localStorage.setItem('token', result.token);
      runInAction(() => { this.user = result.user; });
      return true;
    } catch (error) {
      runInAction(() => { this.error = getErrorMessage(error); });
      return false;
    } finally { runInAction(() => { this.isLoading = false; }); }
  }

  async register(data: RegisterData) {
    this.isLoading = true; this.error = '';
    try {
      const result = await authApi.register(data);
      localStorage.setItem('token', result.token);
      runInAction(() => { this.user = result.user; });
      return true;
    } catch (error) {
      runInAction(() => { this.error = getErrorMessage(error); });
      return false;
    } finally { runInAction(() => { this.isLoading = false; }); }
  }

  logout() { localStorage.removeItem('token'); this.user = null; }
  clearError() { this.error = ''; }
}
export const authStore = new AuthStore();
