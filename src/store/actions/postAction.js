import { auth, firestore, storage } from './../../firebase/fbConfig';
import { uploadImgInFBStorage } from './../../firebase/fbUtils';

import { SET_POSTS } from './../actionTypes';

const setPostsAC = (payload) => {
  return {
    type: SET_POSTS,
    payload,
  };
};

export const addPost = (heading, postText, postImg) => {
  return async (dispatch) => {
    if (postImg) {
      const postImgLink = await uploadImgInFBStorage(postImg, 'postImages');
      console.log(postImgLink);
    }
  };
};
