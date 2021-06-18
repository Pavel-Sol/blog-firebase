import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCUnSIre_YiTRESmArECpScAH1CoLOba5Y',
  authDomain: 'test-blog-1-f93be.firebaseapp.com',
  databaseURL: 'https://test-blog-1-f93be-default-rtdb.firebaseio.com',
  projectId: 'test-blog-1-f93be',
  storageBucket: 'test-blog-1-f93be.appspot.com',
  messagingSenderId: '77066225679',
  appId: '1:77066225679:web:3929969b249e0fa82bbb7a',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
