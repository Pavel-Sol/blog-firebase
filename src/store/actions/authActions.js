import { auth, firestore } from './../../firebase/fbConfig';

import { uploadImgInFBStorage } from './../../firebase/fbUtils';
import { SET_USER } from './../actionTypes';
import { ShowMainPreloader } from './genericActions';

const setUserAC = (payload) => {
  return {
    type: SET_USER,
    payload,
  };
};

export const getCurrentUserFromAuth = () => {
  return (dispatch) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const id = user.uid;
        // console.log(id);
        // ...
        firestore
          .collection('users')
          .doc(id)
          .get()
          .then((doc) => {
            if (doc.exists) {
              const userInfo = doc.data();
              // console.log('Document data:', userInfo);
              dispatch(setUserAC(userInfo));
              dispatch(ShowMainPreloader(false));
            } else {
              // doc.data() will be undefined in this case
              console.log('No such document!');
            }
          })
          .catch((error) => {
            console.log('Error getting document:', error);
            dispatch(ShowMainPreloader(false));
          });
        // ...
      } else {
        // User is signed out
        dispatch(ShowMainPreloader(false));
      }
    });
  };
};

export const registerUser = (email, password, userName) => {
  return (dispatch) => {
    dispatch(ShowMainPreloader(true));
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // ..
        var user = userCredential.user;
        console.log('успешн. регистрация');
        console.log(user);
        firestore
          .collection('users')
          .doc(user.uid)
          .set({ email, password, userName, id: user.uid, userAvatarLink: null })
          .then(() => {
            console.log(`Document ${user.uid} successfully written! in firestore`);
            dispatch(setUserAC({ email, password, userName, id: user.uid, userAvatarLink: null }));
            dispatch(ShowMainPreloader(false));
          })
          .catch((error) => {
            console.error('Error writing document: ', error);
            dispatch(ShowMainPreloader(false));
          });

        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error.message);
        dispatch(ShowMainPreloader(false));
        // ..
      });
  };
};

export const authorizeUser = (email, password) => {
  return (dispatch) => {
    dispatch(ShowMainPreloader(true));
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // ..
        var user = userCredential.user;
        console.log('успешная авторизация');
        console.log(user);
        const id = user.uid;
        firestore
          .collection('users')
          .doc(id)
          .get()
          .then((doc) => {
            if (doc.exists) {
              const userInfo = doc.data();
              console.log('Document data:', userInfo);
              dispatch(setUserAC(userInfo));
              dispatch(ShowMainPreloader(false));
            } else {
              // doc.data() will be undefined in this case
              console.log('No such document!');
              dispatch(ShowMainPreloader(false));
            }
          })
          .catch((error) => {
            console.log('Error getting document:', error);
            dispatch(ShowMainPreloader(false));
          });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error.message);
      });
  };
};

export const logUserOut = () => {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        // Sign-out successful.
        console.log('user out');
        dispatch(setUserAC(null));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const changeUserProfileInfo = ({
  userName,
  email,
  password,
  id,
  userAvatarLink,
  avatarFile,
}) => {
  return async (dispatch) => {
    dispatch(ShowMainPreloader(true));
    if (avatarFile) {
      userAvatarLink = await uploadImgInFBStorage(avatarFile, 'avatars');
      console.log(userAvatarLink);
    }

    console.log('далее');
    firestore
      .collection('users')
      .doc(id)
      .set({ userName, email, password, id, userAvatarLink })
      .then(() => {
        console.log(`Document ${id} successfully changed !!!!!`);
        dispatch(setUserAC({ userName, email, password, id, userAvatarLink }));
        dispatch(ShowMainPreloader(false));
      })
      .catch((error) => {
        console.error('Error writing document: ', error);
        dispatch(ShowMainPreloader(false));
      });
  };
};
