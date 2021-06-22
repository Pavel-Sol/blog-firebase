import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import './Navbar.css'

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {logUserOut} from  './../../store/actions/authActions'


const Navbar = () => {
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch()

     useEffect(() => {
       // ф-ия для Dropdown materialize
      var elems = document.querySelectorAll('#dropdown-trigger');
      M.Dropdown.init(elems);
    }, []);


    const logOut = () => {
      dispatch(logUserOut())
    }

   return (
     <div>
       {
          user
          ? <ul id="dropdown1" className="dropdown-content _dropdown">
              <li><Link to='/'>главная</Link></li>
              <li className="divider"></li>
              <li><Link to='/profile'>мой профиль</Link></li>
              <li onClick={logOut}><Link to='/'>выйти</Link></li>
          </ul>
          : <ul id="dropdown1" className="dropdown-content _dropdown">
              <li><Link to='/'>главная</Link></li>
              <li><Link to='/signIn'>войти</Link></li>
              <li><Link to='/signUp'>регистрация</Link></li>
          </ul>
        }
      
       <nav>
        <div className="nav-wrapper">
          <ul className="right ">
            <li>
              <a id="dropdown-trigger" href="#!" data-target="dropdown1">меню<i className="material-icons right">arrow_drop_down</i>
              </a>
            </li>
            {
              user
              ? <li onClick={logOut}><Link to='/'>выйти</Link></li>
              : <li><Link to='/signIn'>войти</Link></li>
            }
          </ul>
        </div>
       </nav>
     </div>
   )
}

export default Navbar