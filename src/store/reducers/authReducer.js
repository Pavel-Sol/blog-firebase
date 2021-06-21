import { SET_USER, IS_MAIN_PRELOADER } from './../actionTypes';

const initialState = {
  isMainPreloader: true,
  user: null,
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };

    case IS_MAIN_PRELOADER:
      return { ...state, isMainPreloader: action.payload };

    default:
      return state;
  }
};

// =======================================
