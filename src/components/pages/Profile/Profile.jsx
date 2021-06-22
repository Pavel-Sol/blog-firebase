import { useDispatch, useSelector } from 'react-redux';
import {useState} from 'react';

import {changeUserProfileInfo} from './../../../store/actions/authActions'
import './Profile.css'
import avatarPhotoEmpty from './../../../assets/images/avatar.png'

const Profile = () => {
   const user = useSelector((state) => state.authReducer.user);
   console.log(user)
   const dispatch = useDispatch()

   const [name, setName] = useState(user.userName)
   const [avatarFile, setAvatarFile] = useState('');

   const onChangeProfileInfo =() => {
      dispatch(changeUserProfileInfo({
         userName: name,
         email: user.email,
         password: user.password,
         id: user.id,
         userAvatarLink: user.userAvatarLink,
         avatarFile
      }))
   }

   const handleAvatarInput = (e) => {
      setAvatarFile(e.target.files[0])
   }

   const handleNameInput = (e) => {
      setName(e.target.value)
   }

   return (
      <div className='_profile__container'>
         <div className="row">
            <div className="_flex-center">
            <div className='_profile__avatar__wrap'>
                  <img src={
                     user.userAvatarLink 
                     ?user.userAvatarLink
                     :avatarPhotoEmpty 
                     } alt="" />
               </div>
            </div>
         </div>
         <div className='row'>
            <div className="col s10 offset-s1">

               <div className="file-field input-field">
                  <div className="btn">
                     <span>добавить фото</span>
                     <input onInput={handleAvatarInput}  type="file" />
                  </div>
                  <div className="file-path-wrapper">
                     <input className="file-path validate" type="text" />
                  </div>
               </div>
            
            </div>
         </div>
         <div className="row">
            <div className="input-field col s10 offset-s1">
               <i className="material-icons prefix">mode_edit</i>
               <textarea 
                  onChange={handleNameInput}
                id="icon_prefix2" className="materialize-textarea"
                  defaultValue= {user && user.userName}>
               </textarea>
               <label className='_label' htmlFor="icon_prefix2">Name</label>
            </div>
         </div>
         <div className="row">
            <div className="col s8 offset-s2 _center">
               <a className="waves-effect waves-light btn-small"
               onClick={onChangeProfileInfo}>сохранить изменения</a>
            </div>
         </div>
      </div>
   )
}

export default Profile