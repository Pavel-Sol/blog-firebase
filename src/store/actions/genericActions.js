import { SHOW_MAIN_PRELOADER } from './../actionTypes';

export const ShowMainPreloader = (payload) => {
  return {
    type: SHOW_MAIN_PRELOADER,
    payload,
  };
};
