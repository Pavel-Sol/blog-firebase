import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDmrtYU5A-9JtFB8gRCSNLdR3ClO_URCYM',
  authDomain: 'blog-firebase-4df33.firebaseapp.com',
  projectId: 'blog-firebase-4df33',
  storageBucket: 'blog-firebase-4df33.appspot.com',
  messagingSenderId: '582573498636',
  appId: '1:582573498636:web:f8249dc6f79534dfd7a929',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
