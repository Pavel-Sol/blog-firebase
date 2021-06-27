import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

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
      dispatch(addComment(id, commentText, user.userName))
   }

   return(
      <div className='_commets'>

            <div className="_comments-list">
               {
                 currentPostСomments 
                 ? currentPostСomments.map((comment) => {
                    return <div key={comment.commentId}>
                       <div>{comment.commentAuthor}</div>
                       <div>{comment.commentText}</div>
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