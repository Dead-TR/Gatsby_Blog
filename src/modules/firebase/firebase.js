import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyADGwIuPckFMRRYA-pe5bDBSimhf_5Qrc8",
  authDomain: "gatsbyblog-99de1.firebaseapp.com",
  databaseURL: "https://gatsbyblog-99de1.firebaseio.com",
  projectId: "gatsbyblog-99de1",
  storageBucket: "gatsbyblog-99de1.appspot.com",
  messagingSenderId: "355131181220",
  appId: "1:355131181220:web:e726b67f08f891cf187e31",
  measurementId: "G-X59Y3EK2SS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const analitics = firebase.analytics();

export  const db = firebaseApp.firestore();
export  const auth = firebase.auth();
export  const privider = new firebase.auth.GoogleAuthProvider();