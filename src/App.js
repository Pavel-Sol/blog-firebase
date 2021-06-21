import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import AppRouter from './components/AppRouter';
import { getCurrentUserFromAuth } from './store/actions/authActions';
import Navbar from './components/Navbar';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // проверяем есть ли текущий юзер в  системе
    dispatch(getCurrentUserFromAuth());
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
