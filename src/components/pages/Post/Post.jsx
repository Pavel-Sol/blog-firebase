import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import './Post.css'
import {getCurrentPost, addComment, getComments} from './../../../store/actions/postActions'


const Post = (props) => {
   const id = props.match.params.id
   const currentPost = useSelector((state) => state.postReducer.currentPost);
   const currentPostСomments = useSelector((state) => state.postReducer.currentPostСomments);
   const user = useSelector((state) => state.authReducer.user);
   console.log(currentPostСomments);
   
   const [commentText, setCommentText] = useState('')

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getCurrentPost(id))
      dispatch(getComments(id))
   }, [])
   

   const onAddComment = () => {
      dispatch(addComment(id, commentText, user.userName))
   }

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
         <div> 
            {`автор поста: ${currentPost.postAutor}`}
         </div>
         <h1 className="_post-title">
            {currentPost.heading}
         </h1>
         <p className="_post-text">
            {currentPost.postText}
         </p>
         <div className='_commets'>

            <div className="_comments-list">
               {
                 currentPostСomments 
                 ? currentPostСomments.map((comment) => {
                    return <div key={comment.commentId}>
                       <div>{comment.commentAutor}</div>
                       <div>{comment.commentText}</div>
                    </div>
                 })
                 : <div>комментариев нет</div>
               }
            </div>
            
            <input type="text" onChange={(e) => setCommentText(e.target.value)} />
            <button onClick={onAddComment}>send</button>
         </div>
      </div>
   )
}

export default Post
