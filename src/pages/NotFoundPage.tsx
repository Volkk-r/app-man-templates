import { Link } from 'react-router-dom';
export function NotFoundPage() {
  return <main className="container"><div className="empty"><div className="eyebrow">ОШИБКА 404</div><h1>Страница не найдена</h1><p>Проверьте адрес или вернитесь на главную страницу кабинета.</p><Link className="button primary" to="/my-apartments">Мои квартиры</Link></div></main>;
}
