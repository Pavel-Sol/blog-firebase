import { useState} from 'react';
import { useDispatch} from 'react-redux';
import {registerUser} from './../../../store/actions/authActions'


const SignUp = () => { 
   const [userName, setUserName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const dispatch = useDispatch()
  
    const registration = (e) => {
      e.preventDefault();
      dispatch(registerUser(email, password, userName))
      
    };

   return (
      <div className='center-align'>
         <h4>SignUp регистрация</h4>
         <form action="" onSubmit={registration}>
            <input required={true}
               onChange={(e) => setUserName(e.target.value)} type="text" placeholder="name" />
            <input required={true}
               onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" />
            <input required={true}
               onChange={(e) => setPassword(e.target.value)} type="text" placeholder="pass" />
            <button className='waves-effect waves-light btn _btn'>зарегистрироваться</button>
         </form>
      </div>
   )
}

export default SignUp