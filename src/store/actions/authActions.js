import { auth, firestore } from './../../firebase/fbConfig';

import { SET_USER } from './../actionTypes';

export const setUserAC = (payload) => {
  return {
    type: SET_USER,
    payload,
  };
};

export const registerUser = (email, pass, lastName) => {
  return (dispatch) => {
    auth
      .createUserWithEmailAndPassword(email, pass)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log('успешн. регистрация');
        console.log(user);
        firestore
          .collection('users')
          .doc(user.uid)
          .set({ email, pass, id: user.uid })
          .then(() => {
            console.log(`Document ${user.uid} successfully written! in firestore`);
            dispatch(setUserAC({ email, lastName, id: user.uid }));
          })
          .catch((error) => {
            console.error('Error writing document: ', error);
          });

        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error.message);
        // ..
      });
  };
};
