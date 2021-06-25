import { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {addPost} from './../../../store/actions/postAction'
import './CreatePost.css'

const CreatePost = () => {
const dispatch = useDispatch()

const [heading, setHeading] = useState('')
const [postText, setPostText] = useState('')
const [postImg,  setPostImg] = useState('')

const handlePost =() => {
   // console.log(heading)
   // console.log(postText)
   // console.log(postImg)
   dispatch(addPost(heading, postText, postImg))
}

   return (
      <div>
         <h3>добавьте новый пост</h3>
         <div className="row">
            <div className="input-field col s12">
               <input onChange={(e) => setHeading(e.target.value)} 
               id="heading" type="text" className="validate"/>
               <label htmlFor="heading">Заголовок</label>
            </div>
         </div>
         <div className="row">
            <div className="input-field col s12">
               <textarea onChange={(e) => setPostText(e.target.value)} 
                id="textarea1" className="materialize-textarea"></textarea>
               <label htmlFor="textarea1">Текст</label>
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
               <a className="waves-effect waves-light btn-small"
               onClick={handlePost}>добавить пост</a>
            </div>
         </div>
      </div>
   )
}

export default CreatePost