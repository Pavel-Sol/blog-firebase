import { SHOW_MAIN_PRELOADER } from './../actionTypes';

const initialState = {
  isMainPreloader: true,
};

export const genericReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MAIN_PRELOADER:
      return { ...state, isMainPreloader: action.payload };

    default:
      return state;
  }
};
