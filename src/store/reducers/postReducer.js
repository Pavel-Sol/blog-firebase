import { SET_POSTS, SET_CURRENT_POST, SET_CURRENT_POST_COMMENTS } from './../actionTypes';

const initialState = {
  posts: [],
  currentPost: null,
  currentPostСomments: null,
};
export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return { ...state, posts: action.payload };

    case SET_CURRENT_POST:
      return { ...state, currentPost: action.payload };

    case SET_CURRENT_POST_COMMENTS:
      return { ...state, currentPostСomments: action.payload };

    default:
      return state;
  }
};

// =======================================
