import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCv4rxJ4Fp60kuZHVecV5J5iBa9yozOpVs",
  authDomain: "instagram-clone-88f79.firebaseapp.com",
  databaseURL: "https://instagram-clone-88f79.firebaseio.com",
  projectId: "instagram-clone-88f79",
  storageBucket: "instagram-clone-88f79.appspot.com",
  messagingSenderId: "90526312637",
  appId: "1:90526312637:web:6f07b6cc8317965d2e2fd4",
  measurementId: "G-TFS322Y83M",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
