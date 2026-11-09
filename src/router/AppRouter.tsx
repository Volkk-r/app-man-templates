import { observer } from 'mobx-react-lite';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { authStore } from '../stores/authStore';
import { MainLayout } from '../layouts/MainLayout';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { MyApartmentsPage } from '../pages/MyApartmentsPage';
import { CreateApartmentPage } from '../pages/CreateApartmentPage';
import { EditApartmentPage } from '../pages/EditApartmentPage';
import { NotFoundPage } from '../pages/NotFoundPage';

const ProtectedRoute = observer(() => authStore.user ? <Outlet /> : <Navigate to="/login" replace />);
export function AppRouter() {
  return <Routes>
    <Route path="/" element={<Navigate to="/my-apartments" replace />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route element={<ProtectedRoute />}>
      <Route element={<MainLayout />}>
        <Route path="/my-apartments" element={<MyApartmentsPage />} />
        <Route path="/my-apartments/new" element={<CreateApartmentPage />} />
        <Route path="/my-apartments/:apartmentId/edit" element={<EditApartmentPage />} />
      </Route>
    </Route>
    <Route path="*" element={<NotFoundPage />} />
  </Routes>;
}
