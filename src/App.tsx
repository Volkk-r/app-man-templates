import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { authStore } from './stores/authStore';
import { Loader } from './components/ui';
import { AppRouter } from './router/AppRouter';

export const App = observer(() => {
  useEffect(() => { void authStore.restoreSession(); }, []);
  if (!authStore.isReady) return <Loader />;
  return <AppRouter />;
});
