import  firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyBZAZoy6HEXGdWgYRLH53URZd-sL54L9YY",
  authDomain: "letmeask-76948.firebaseapp.com",
  databaseURL: "https://letmeask-76948-default-rtdb.firebaseio.com",
  projectId: "letmeask-76948",
  storageBucket: "letmeask-76948.appspot.com",
  messagingSenderId: "1090065458924",
  appId: "1:1090065458924:web:57ac55f141677353a1a7c9"
};      

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database};