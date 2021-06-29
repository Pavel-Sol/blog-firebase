import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AppRouter from './components/AppRouter/AppRouter';
import { getCurrentUserFromAuth } from './store/actions/authActions';
import { getPosts } from './store/actions/postActions';
import Navbar from './components/NavBar/Navbar';
import MainPreloader from './components/MainPreloader/MainPreloader';
// import Alert from './components/Alert/Alert';

function App() {
  const dispatch = useDispatch();
  const isMainPreloader = useSelector((state) => state.genericReducer.isMainPreloader);

  useEffect(() => {
    // проверяем есть ли текущий юзер в  системе
    dispatch(getCurrentUserFromAuth());
    // получаем посты
    dispatch(getPosts());
  }, []);

  return (
    <div className="App">
      {/* <Alert /> */}
      {isMainPreloader && <MainPreloader />}
      <Navbar />
      <div className="container">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
