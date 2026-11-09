import { Link } from 'react-router-dom';
import { ApartmentForm } from '../components/ApartmentForm';
export function CreateApartmentPage() {
  return <main className="container form-container"><Link className="back-link" to="/my-apartments">← Все квартиры</Link><div className="page-head"><div><div className="eyebrow">ВАШЕ ОБЪЯВЛЕНИЕ</div><h1>Добавление квартиры</h1><p className="muted">Заполните информацию о вашем объекте размещения</p></div></div><ApartmentForm /></main>;
}
