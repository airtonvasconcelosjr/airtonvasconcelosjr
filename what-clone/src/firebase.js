import firebase from "firebase";

const firebaseConfig = {

    apiKey: "AIzaSyBBBN4H8oIqM06JQ_YqcLmUng0Lb5evMcM",
  
    authDomain: "what-clone-37d30.firebaseapp.com",
  
    projectId: "what-clone-37d30",
  
    storageBucket: "what-clone-37d30.appspot.com",
  
    messagingSenderId: "851180471624",
  
    appId: "1:851180471624:web:2f184fff6fbb1332119f7d",
  
    measurementId: "G-FF8D7DPHM1"
  
  };


  const app = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  
  const db = app.firestore();
  
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, googleProvider };
  
  export default db;