import 'materialize-css/dist/css/materialize.min.css';
import { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {authorizeUser} from './../../../store/actions/authActions'

const SignIn = () => {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const dispatch = useDispatch()
   const user = useSelector((state) => state.authReducer.user);
   console.log(user)

   const authorization  = (e) => {
      e.preventDefault();
      dispatch(authorizeUser(email, password))
    };


   return (
      <div className='center-align'>
         <h4> SignIn aвторизация</h4>
         <form action="" onSubmit={authorization}>
            <input required={true}
               onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" />
            <input required={true}
               onChange={(e) => setPassword(e.target.value)} type="text" placeholder="pass" />
            <button 
            className='waves-effect waves-light btn _btn'>войти</button>
         </form>
         <div className="row">
            <div className="col s12 flow-text _text-center ">
               <Link to='/signUp'>Ещё нет аккаунта? Регистрация</Link>
            </div>
         </div>
      </div>
   )
}

export default SignIn