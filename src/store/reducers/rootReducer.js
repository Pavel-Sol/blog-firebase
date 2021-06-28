import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { postReducer } from './postReducer';
import { genericReducer } from './genericReducer';

export const rootReducer = combineReducers({
  authReducer: authReducer,
  postReducer: postReducer,
  genericReducer: genericReducer,
});
