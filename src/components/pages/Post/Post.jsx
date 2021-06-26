import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import './Post.css'
import {getCurrentPost} from './../../../store/actions/postActions'


const Post = (props) => {
   const id = props.match.params.id
   const currentPost = useSelector((state) => state.postReducer.currentPost);
   console.log(currentPost);

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getCurrentPost(id))
   }, [])
   

   if(!currentPost) {
      return <h1>загрузка</h1>
   }

   return (
      <div className="_post-container _text-center">
         {
            currentPost.postImgLink &&
            <div className="_post-img">
               <img src={currentPost.postImgLink} alt="" />
            </div>
         }

         <h1 className="_post-title">
            {currentPost.heading}
         </h1>
         <p className="_post-text">
            {currentPost.postText}
         </p>
      </div>
   )
}

export default Post
