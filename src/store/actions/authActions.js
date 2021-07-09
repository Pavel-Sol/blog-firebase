import { auth, firestore } from './../../firebase/fbConfig';
import { alert } from './../../utils/alert';
import { uploadImgInFBStorage } from './../../firebase/fbUtils';
import { SET_USER } from './../actionTypes';
import { ShowMainPreloader } from './genericActions';

const setUserAC = (payload) => {
  return {
    type: SET_USER,
    payload,
  };
};

// получение текущего юзера в системе
export const getCurrentUserFromAuth = () => {
  return (dispatch) => {
    // получаем юзера из fb auth
    auth.onAuthStateChanged((user) => {
      if (user) {
        const id = user.uid;
        // достаём доп инфу о юзере из fb firestore
        firestore
          .collection('users')
          .doc(id)
          .get()
          .then((doc) => {
            if (doc.exists) {
              const userInfo = doc.data();
              dispatch(setUserAC(userInfo));
              dispatch(ShowMainPreloader(false));
            } else {
              console.log('No such document! no info about user');
            }
          })
          .catch((error) => {
            console.log('Error getting document:', error);
            dispatch(ShowMainPreloader(false));
          });
      } else {
        // User is signed out
        dispatch(ShowMainPreloader(false));
      }
    });
  };
};

// регистрация юзера
export const registerUser = (email, password, userName) => {
  return (dispatch) => {
    dispatch(ShowMainPreloader(true));
    // регистрация в fb auth
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        let user = userCredential.user;
        alert('успешная регистрация');

        // запись доп информации в fb firestore
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
        let errorMessage = error.message;
        console.log(errorMessage);
        alert(`ошибка регистрации !!! ${errorMessage}`);
        dispatch(ShowMainPreloader(false));
        // ..
      });
  };
};

// авторизация юзера
export const authorizeUser = (email, password) => {
  return (dispatch) => {
    dispatch(ShowMainPreloader(true));
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // ..
        let user = userCredential.user;
        alert('успешная авторизация');
        const id = user.uid;
        firestore
          .collection('users')
          .doc(id)
          .get()
          .then((doc) => {
            if (doc.exists) {
              const userInfo = doc.data();
              dispatch(setUserAC(userInfo));
              dispatch(ShowMainPreloader(false));
            } else {
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
        let errorMessage = error.message;
        console.log(error.message);
        alert(`ошибка авторизации !!! ${errorMessage}`);
        dispatch(ShowMainPreloader(false));
      });
  };
};

// выход юзера
export const logUserOut = () => {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUserAC(null));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// изменение инфы в профиле
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
    }

    firestore
      .collection('users')
      .doc(id)
      .set({ userName, email, password, id, userAvatarLink })
      .then(() => {
        console.log(`Document ${id} successfully changed !!!!!`);
        dispatch(setUserAC({ userName, email, password, id, userAvatarLink }));
        dispatch(ShowMainPreloader(false));
        alert('профиль успешно измннён');
      })
      .catch((error) => {
        console.error('Error writing document: ', error);
        dispatch(ShowMainPreloader(false));
        alert('не удалось изменить профиль');
      });
  };
};
