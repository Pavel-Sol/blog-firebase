import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { postReducer } from './postReducer';

export const rootReducer = combineReducers({
  authReducer: authReducer,
  postReducer: postReducer,
});
