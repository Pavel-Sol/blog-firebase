import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {getCurrentPost} from './../../../store/actions/postActions'


const Post = (props) => {
   const id = props.match.params.id
   const currentPost = useSelector((state) => state.postReducer.currentPost);
   console.log(currentPost);

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getCurrentPost(id))
   }, [])
   

   return <h3>Post333</h3>
}

export default Post
