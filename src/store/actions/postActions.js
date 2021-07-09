import { firestore, database } from '../../firebase/fbConfig';
import firebase from 'firebase';
import { uploadImgInFBStorage } from '../../firebase/fbUtils';
import { ShowMainPreloader } from './genericActions';
import { alert } from './../../utils/alert';
import { generateId } from './../../utils/utils';

import { SET_POSTS, SET_CURRENT_POST, SET_CURRENT_POST_COMMENTS } from '../actionTypes';

const setPostsAC = (payload) => {
  return {
    type: SET_POSTS,
    payload,
  };
};

const setCurrentPostCommentsAC = (payload) => {
  return {
    type: SET_CURRENT_POST_COMMENTS,
    payload,
  };
};

const setCurrentPostAC = (payload) => {
  return {
    type: SET_CURRENT_POST,
    payload,
  };
};

// добавление поста
export const addPost = (heading, postText, postImg, postAuthor) => {
  return async (dispatch) => {
    dispatch(ShowMainPreloader(true));

    // проверяем прикреплено ли фото к посту, если да, то загружаем в fb storage
    let postImgLink = null;
    if (postImg) {
      postImgLink = await uploadImgInFBStorage(postImg, 'postImages');
    }

    let idPost = generateId();

    firestore
      .collection('posts')
      .doc(idPost)
      .set({
        postAuthor,
        heading,
        postText,
        postImgLink,
        idPost,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        console.log('пост сохранён');
        dispatch(getPosts());
        dispatch(ShowMainPreloader(false));
        alert('Ваш пост успешно добавлен');
      })
      .catch((er) => {
        console.log(er);
        dispatch(ShowMainPreloader(false));
        alert('Не удалось добавить пост, попробуйте позже');
      });
    // -------------
  };
};

// получение всех постов из fb
export const getPosts = () => {
  return (dispatch) => {
    const arrData = [];

    firestore
      .collection('posts')
      .get()
      .then((querySnapshot) => {
        // преобразуем объект с постами в массив объектов
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          arrData.push({ ...data, id: doc.id });
        });

        dispatch(setPostsAC(arrData));
      });
  };
};

// получение текущего поста для отображения на странице /postId
export const getCurrentPost = (id) => {
  return (dispatch) => {
    let docRef = firestore.collection('posts').doc(id);

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          dispatch(setCurrentPostAC(doc.data()));
        } else {
          console.log('No such document!');
        }
      })
      .catch((error) => {
        console.log('Error getting document:', error);
      });
  };
};

// получение комментариев к посту
export const getComments = (postId) => {
  return (dispatch) => {
    database.ref('postComments/' + postId).on('value', (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        const arrData = [];

        // преобразуем объект с комментами в массив
        for (let key in data) {
          const itemData = { ...data[key], commentId: key };
          arrData.push(itemData);
        }
        dispatch(setCurrentPostCommentsAC(arrData.reverse()));
      } else {
        console.log('no comments');
        dispatch(setCurrentPostCommentsAC(null));
      }
    });
  };
};

// добавление комментария
export const addComment = (postId, commentText, commentAuthor, commentAuthorsAvatarLink) => {
  return (dispatch) => {
    database
      .ref('postComments/' + postId)
      .push()
      .set({
        commentText,
        commentAuthor,
        commentAuthorsAvatarLink,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
      })
      .then(() => {
        getComments(postId);
        console.log('success');
        alert('Ваш комментарий успешно добавлен');
      })
      .catch((er) => {
        alert('Не удалось добавить комментарий');
        console.log(er);
      });
  };
};

