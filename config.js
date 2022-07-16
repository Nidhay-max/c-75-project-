import firebase from "firebase";
require("@firebase/firestore");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABp42oF4nhSHbATT09T_QvwRLl3eXfZf8",
  authDomain: "c-71-695d2.firebaseapp.com",
  projectId: "c-71-695d2",
  storageBucket: "c-71-695d2.appspot.com",
  messagingSenderId: "1081373384551",
  appId: "1:1081373384551:web:c5d4cdd209eb85220d99c2",
  measurementId: "G-VH9K60CH9G"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
