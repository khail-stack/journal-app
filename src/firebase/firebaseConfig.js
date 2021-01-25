import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjW3PWLGzzPR9llcw5eUpgXYa6_eVk82Q",
  authDomain: "react-app-cursos-db87b.firebaseapp.com",
  databaseURL: "https://react-app-cursos-db87b.firebaseio.com",
  projectId: "react-app-cursos-db87b",
  storageBucket: "react-app-cursos-db87b.appspot.com",
  messagingSenderId: "901345858983",
  appId: "1:901345858983:web:1fc73fb590f57aba525282",
  measurementId: "G-J44HMVKELE",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
