import { Link, useParams } from 'react-router-dom';
import { ApartmentForm } from '../components/ApartmentForm';
export function EditApartmentPage() {
  const { apartmentId } = useParams<{ apartmentId: string }>();
  return <main className="container form-container"><Link className="back-link" to="/my-apartments">← Все квартиры</Link><div className="page-head"><div><div className="eyebrow">ВАШЕ ОБЪЯВЛЕНИЕ</div><h1>Редактирование квартиры</h1><p className="muted">Квартира № {apartmentId}</p></div></div><ApartmentForm /></main>;
}
