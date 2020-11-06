// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCIs_S492J11SooEjmrfAQ7-QBY8FY-gtk",
    authDomain: "what-app-clone-57459.firebaseapp.com",
    databaseURL: "https://what-app-clone-57459.firebaseio.com",
    projectId: "what-app-clone-57459",
    storageBucket: "what-app-clone-57459.appspot.com",
    messagingSenderId: "264141532234",
    appId: "1:264141532234:web:19d215dd01a831970d8ab3",
    measurementId: "G-Z6GG68G0BZ"
  };
  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth= firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;