import firebase from "firebase";
import * as config from './config.json';

const firebaseConfig = config.default;
const firebaseApp = firebase.initializeApp(firebaseConfig);
const analitics = firebase.analytics();

export  const db = firebaseApp.firestore();
export  const provider = new firebase.auth.GoogleAuthProvider();
