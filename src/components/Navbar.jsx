import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const user = useSelector((state) => state.authReducer.user);


     useEffect(() => {
       // ф-ия для Dropdown materialize
      var elems = document.querySelectorAll('#dropdown-trigger');
      M.Dropdown.init(elems);
    }, []);


   return (
     <div>
       {
          user
          ? <ul id="dropdown1" className="dropdown-content">
              <li><Link to='/'>главная</Link></li>
              <li className="divider"></li>
              <li><Link to='/profile'>мой профиль</Link></li>
          </ul>
          : <ul id="dropdown1" className="dropdown-content">
              <li><Link to='/'>главная</Link></li>
              <li><Link to='/signIn'>войти</Link></li>
          </ul>
        }
      
       <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">Logo</Link>
          <ul className="right ">
            <li>
              <a id="dropdown-trigger" href="#!" data-target="dropdown1">меню<i className="material-icons right">arrow_drop_down</i>
              </a>
            </li>
          </ul>
        </div>
       </nav>
     </div>
   )
}

export default Navbar