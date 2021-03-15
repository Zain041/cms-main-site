import firebase from 'firebase/app' 
import 'firebase/firestore'
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyBVf3GvGLjzKgZ90KSMlZTE-wGDIbxQYtg",
  authDomain: "content-mangement-system.firebaseapp.com",
  projectId: "content-mangement-system",
  storageBucket: "content-mangement-system.appspot.com",
  messagingSenderId: "1091633324883",
  appId: "1:1091633324883:web:595ef8b51ec8df7a41b7a6",
  measurementId: "G-BX08M2M6QX"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });
//   firebase.analytics();
export default firebase