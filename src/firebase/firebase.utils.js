import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDrptlSbm1_vOjCxi_9GcMBb3URBK6CVuw",
  authDomain: "online-store-db-db78a.firebaseapp.com",
  databaseURL: "https://online-store-db-db78a.firebaseio.com",
  projectId: "online-store-db-db78a",
  storageBucket: "",
  messagingSenderId: "1034071100906",
  appId: "1:1034071100906:web:e3f345ed63975699f4b693"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
