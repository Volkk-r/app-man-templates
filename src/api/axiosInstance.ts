import axios from 'axios';

export const axiosInstance = axios.create({ baseURL: '/api' });

axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Ошибка входа не должна завершать существующую сессию или прерывать форму входа.
axiosInstance.interceptors.response.use(response => response, error => {
  const url = error.config?.url || '';
  const isAuthRequest = url === '/auth/login' || url === '/auth/register';
  if (error.response?.status === 401 && !isAuthRequest) {
    localStorage.removeItem('token');
    window.dispatchEvent(new Event('auth:expired'));
  }
  return Promise.reject(error);
});

export function getErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    if (!error.response) return 'Не удалось связаться с сервером. Проверьте, что backend запущен.';
    const data = error.response.data as { message?: string; errors?: Record<string, string> };
    const details = data?.errors ? Object.values(data.errors).join('. ') : '';
    return [data?.message || 'Ошибка запроса', details].filter(Boolean).join(': ');
  }
  return 'Произошла ошибка. Попробуйте ещё раз.';
}
