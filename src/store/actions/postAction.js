import { auth, firestore, storage } from './../../firebase/fbConfig';

import { SET_POSTS } from './../actionTypes';

const setPostsAC = (payload) => {
  return {
    type: SET_POSTS,
    payload,
  };
};
