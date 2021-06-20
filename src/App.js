import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import AppRouter from './components/AppRouter';
import { getCurrentUserFromAuth } from './store/actions/authActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // проверяем есть ли текущий юзер в  системе
    dispatch(getCurrentUserFromAuth());
  }, []);

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
