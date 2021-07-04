import { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {addPost} from '../../../store/actions/postActions'
import './CreatePost.css'

const CreatePost = () => {
const user = useSelector((state) => state.authReducer.user);
const dispatch = useDispatch()

const [heading, setHeading] = useState('')
const [postText, setPostText] = useState('')
const [postImg,  setPostImg] = useState('')

const handlePost =(e) => {
   e.preventDefault()
   dispatch(addPost(heading, postText, postImg, user.userName))
   e.target.reset()
}

   return (
      <div className='center-align'>
         <h4>добавьте пост</h4>
         <form onSubmit={handlePost} action="">
            <div className="row">
               <div className="input-field col s12">
                  <input 
                  required={true}
                  onChange={(e) => setHeading(e.target.value)} 
                  id="heading" type="text" className="validate"/>
                  <label htmlFor="heading">Заголовок</label>
                  <span className="helper-text" data-error="отсутствует заголовок поста" data-success="right"></span>
               </div>
            </div>
            <div className="row">
               <div className="input-field col s12">
                  <textarea 
                  required={true}
                  onChange={(e) => setPostText(e.target.value)} 
                  id="textarea1" className="materialize-textarea"></textarea>
                  <label htmlFor="textarea1">Текст</label>
                  <span className="helper-text" data-error="отсутствует текст поста" data-success="right"></span>
               </div>
            </div>
            <div className='row'>
               <div className="col s12">
                  <div className="file-field input-field">
                     <div className="btn">
                        <span>прикрепить фото</span>
                        <input onInput={(e) => setPostImg(e.target.files[0])} 
                        type="file" />
                     </div>
                     <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" />
                     </div>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col s8 offset-s2 _center">
                  <button type='submit'
                   className="waves-effect waves-light btn-small">добавить пост</button>
               </div>
            </div>
         </form>
      </div>
   )
}

export default CreatePost