import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCfWxLcJJ8fqEoN7FMb533PYu0aZ6HuPYk",
  authDomain: "slack-clone-bb6bd.firebaseapp.com",
  projectId: "slack-clone-bb6bd",
  storageBucket: "slack-clone-bb6bd.appspot.com",
  messagingSenderId: "461764295144",
  appId: "1:461764295144:web:0f51a4ef51fa15ed0d0c5d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
