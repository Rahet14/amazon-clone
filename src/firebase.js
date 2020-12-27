import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD7CeGU5VXJS8EcFvstNHS9OJLD99_dhSI",
  authDomain: "clone-2ae33.firebaseapp.com",
  projectId: "clone-2ae33",
  storageBucket: "clone-2ae33.appspot.com",
  messagingSenderId: "382328980891",
  appId: "1:382328980891:web:063423778747b0eefdcd3e",
  measurementId: "G-H6NWQQDZH4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
