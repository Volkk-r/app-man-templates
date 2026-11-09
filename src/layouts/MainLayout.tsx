import { observer } from 'mobx-react-lite';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { authStore } from '../stores/authStore';

export const MainLayout = observer(() => <><header className="header"><div className="header-inner"><Link to="/my-apartments" className="brand"><span className="brand-icon">⌂</span><span>Дом<span className="brand-accent">.</span><small>кабинет арендодателя</small></span></Link><nav className="main-nav" aria-label="Основная навигация"><NavLink to="/my-apartments">Мои квартиры</NavLink></nav><div className="account"><span>{authStore.user?.name}</span><button onClick={() => authStore.logout()}>Выйти</button></div></div></header><Outlet/></>);
