import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import {changeDateFormat} from './../../utils/utils'
import './PostComments.css'
import avatarPhotoEmpty from './../../assets/images/avatar.png'
import {addComment, getComments} from './../../store/actions/postActions'

const PostComments = ({id}) => {
   const currentPostСomments = useSelector((state) => state.postReducer.currentPostСomments);
   const user = useSelector((state) => state.authReducer.user);
   const dispatch = useDispatch()

   const [commentText, setCommentText] = useState('')


   useEffect(() => {
      dispatch(getComments(id))
   }, [])

   const onAddComment = () => {
      dispatch(addComment(id, commentText, user.userName, user.userAvatarLink))
   }

   return(
      <div className='_commets'>
            <p className='_comments-title left-align'>Комментарии</p>
            <div className="_comments-list">
               {
                 currentPostСomments 
                 ? currentPostСomments.map((comment) => {
                    return <div className='_comment' key={comment.commentId}>
                        <div className="_comment-avatar">
                           <img src={
                              comment.commentAuthorsAvatarLink || avatarPhotoEmpty 
                           } alt="avatar" />
                        </div>
                        <div className="_comment-desc left-align">
                           <div className='_comment-author'>{comment.commentAuthor}</div>
                           <div className="_comment-date">
                              {
                                changeDateFormat(comment.timestamp)
                              }
                           </div>
                           <div>{comment.commentText}</div>
                        </div>
                    </div>
                 })
                 : <div>комментариев нет</div>
               }
            </div>
            
            <input type="text" onChange={(e) => setCommentText(e.target.value)} />
            <button onClick={onAddComment}>send</button>
         </div>
   )
}

export default PostComments