import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Link, Navigate } from 'react-router-dom';
import { authStore } from '../stores/authStore';
import { Alert, Button, Input } from '../components/ui';

export const RegisterPage = observer(() => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  if (authStore.user) return <Navigate to="/my-apartments" replace />;
  return <main className="auth-wrap"><div className="auth-panel"><div className="eyebrow">APARTMENT MANAGEMENT</div><h1>Создать аккаунт</h1><p className="muted">Управляйте объявлениями о сдаче жилья в одном месте.</p><form onSubmit={event => { event.preventDefault(); void authStore.register({ name, email, password }); }}><div className="fields"><Input label="Имя" required maxLength={100} autoComplete="name" value={name} onChange={event => setName(event.target.value)} /><Input label="Email" type="email" required autoComplete="email" value={email} onChange={event => setEmail(event.target.value)} /><Input label="Пароль" type="password" required minLength={8} maxLength={128} autoComplete="new-password" hint="Не менее 8 символов" value={password} onChange={event => setPassword(event.target.value)} />{authStore.error && <Alert>{authStore.error}</Alert>}<Button type="submit" disabled={authStore.isLoading}>{authStore.isLoading ? 'Подождите…' : 'Зарегистрироваться'}</Button></div></form><Link className="switch" to="/login" onClick={() => authStore.clearError()}>Уже есть аккаунт? Войти</Link></div></main>;
});
