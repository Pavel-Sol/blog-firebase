import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {registerUser} from './../../../store/actions/authActions'


const SignUp = () => { 
   const [userName, setUserName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const dispatch = useDispatch()
   const user = useSelector((state) => state.authReducer.user);
   console.log(user)
  
    const registration = (e) => {
      e.preventDefault();
      dispatch(registerUser(email, password, userName))
      
    };

   return (
      <div>
         <h3>SignUp регистрация</h3>
         <form action="" onSubmit={registration}>
            <input required={true}
               onChange={(e) => setUserName(e.target.value)} type="text" placeholder="name" />
            <input required={true}
               onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" />
            <input required={true}
               onChange={(e) => setPassword(e.target.value)} type="text" placeholder="pass" />
            <button className='waves-effect waves-light btn'>зарегистрироваться</button>
         </form>

       {user && <h1>вы успешно прошли регистрацию</h1>}
      </div>
   )
}

export default SignUp