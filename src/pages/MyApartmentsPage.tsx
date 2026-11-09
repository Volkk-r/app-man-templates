import { Link } from 'react-router-dom';

export function MyApartmentsPage() {
  return <main className="container"><div className="page-head"><div><div className="eyebrow">КАБИНЕТ АРЕНДОДАТЕЛЯ</div><h1>Мои квартиры</h1><p className="muted">Управляйте объявлениями и информацией о жилье</p></div><Link className="button primary" to="/my-apartments/new">＋ Добавить квартиру</Link></div><div className="cards" /></main>;
}
