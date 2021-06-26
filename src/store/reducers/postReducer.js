import { SET_POSTS, SET_CURRENT_POST } from './../actionTypes';

const initialState = {
  posts: [],
  currentPost: null,
};
export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return { ...state, posts: action.payload };

    case SET_CURRENT_POST:
      return { ...state, currentPost: action.payload };

    default:
      return state;
  }
};

// =======================================
