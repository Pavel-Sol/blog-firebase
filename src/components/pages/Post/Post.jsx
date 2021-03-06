import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {changeDateFormat} from './../../../utils/utils'
import './Post.css'
import {getCurrentPost} from './../../../store/actions/postActions'
import PostComments from './../../PostComments/PostComments'


const Post = (props) => {
   const id = props.match.params.id
   const currentPost = useSelector((state) => state.postReducer.currentPost);
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getCurrentPost(id))
   }, [])
   

   if(!currentPost) {
      return <p className='_post-loading center-align'>подождите несколько секунд...</p>
   }

   return (
      <div className="_post-container center-align">
         {
            currentPost.postImgLink &&
            <div className="_post-img">
               <img src={currentPost.postImgLink} alt="" />
            </div>
         }
         <div className="_post_date">
            {
               changeDateFormat(currentPost.timestamp.toMillis())
            }
         </div>
         <blockquote>
            <div className='_post-author left-align'> 
               {` Автор: ${currentPost.postAuthor}`}
            </div>
         </blockquote>
         <h1 className="_post-title">
            {currentPost.heading}
         </h1>
         <p className="_post-text">
            {currentPost.postText}
         </p>

         <PostComments id= {id}/>
      </div>
   )
}

export default Post
