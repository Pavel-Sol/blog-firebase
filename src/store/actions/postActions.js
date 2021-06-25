import { auth, firestore, storage } from '../../firebase/fbConfig';
import firebase from 'firebase';
import { uploadImgInFBStorage } from '../../firebase/fbUtils';

import { SET_POSTS } from '../actionTypes';

const setPostsAC = (payload) => {
  return {
    type: SET_POSTS,
    payload,
  };
};

export const addPost = (heading, postText, postImg) => {
  return async (dispatch) => {
    let postImgLink = null;

    if (postImg) {
      postImgLink = await uploadImgInFBStorage(postImg, 'postImages');
      console.log(postImgLink);
    }

    firestore
      .collection('posts')
      .add({
        heading,
      })
      .then((docRef) => {
        console.log('post с id ', docRef.id);
        //чтобы id автомаически сгенерился и попал отдельным полем в doc пока
        // сделал через двойное сохранение
        firestore
          .collection('posts')
          .doc(docRef.id)
          .set({
            heading,
            postText,
            postImgLink,
            idPost: docRef.id,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          })
          .then(() => {
            console.log('пост сохранён');
            dispatch(getPosts());
          });
      })
      .catch((er) => console.log(er));
    // -------------
  };
};

export const getPosts = () => {
  return (dispatch) => {
    const arrData = [];
    firestore
      .collection('posts')
      .get()
      .then((querySnapshot) => {
        // console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
          // console.log(`${doc.id} => ${doc.data()}`);
          // console.log(doc.data());
          let data = doc.data();
          arrData.push({ ...data, id: doc.id });
        });

        // console.log(arrData);
        dispatch(setPostsAC(arrData));
      });
  };
};
