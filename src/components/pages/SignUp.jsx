import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {registerUser} from './../../store/actions/authActions'


const SignUp = () => { 
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [pass, setPass] = useState('');

   const dispatch = useDispatch()
   const user = useSelector((state) => state.authReducer.user);
   console.log(user)
  
    const registration = (e) => {
      e.preventDefault();
      dispatch(registerUser(email, pass, lastName))
      
    };

   return (
      <div>
         <h3>SignUp</h3>
         <form action="">
            <input onChange={(e) => setLastName(e.target.value)} type="text" placeholder="name" />
            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" />
            <input onChange={(e) => setPass(e.target.value)} type="text" placeholder="pass" />
            <button onClick={registration}>зарегистрироваться</button>
         </form>

       {user && <h1>вы успешно прошли регистрацию</h1>}
      </div>
   )
}

export default SignUp