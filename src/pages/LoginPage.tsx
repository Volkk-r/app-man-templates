import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Link, Navigate } from 'react-router-dom';
import { authStore } from '../stores/authStore';
import { Alert, Button, Input } from '../components/ui';

export const LoginPage = observer(() => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  if (authStore.user) return <Navigate to="/my-apartments" replace />;
  return <main className="auth-wrap"><div className="auth-panel"><div className="eyebrow">APARTMENT MANAGEMENT</div><h1>Рады вас видеть</h1><p className="muted">Управляйте объявлениями о сдаче жилья в одном месте.</p><form onSubmit={event => { event.preventDefault(); void authStore.login({ email, password }); }}><div className="fields"><Input label="Email" type="email" autoComplete="email" required value={email} onChange={event => setEmail(event.target.value)} /><Input label="Пароль" type="password" autoComplete="current-password" minLength={8} maxLength={128} required value={password} onChange={event => setPassword(event.target.value)} />{authStore.error && <Alert>{authStore.error}</Alert>}<Button type="submit" disabled={authStore.isLoading}>{authStore.isLoading ? 'Подождите…' : 'Войти'}</Button></div></form><Link className="switch" to="/register" onClick={() => authStore.clearError()}>Нет аккаунта? Зарегистрироваться</Link></div></main>;
});
