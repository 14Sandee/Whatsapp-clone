import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBeR871fxaA8TyOGEC11C87gtM2MCRZ1Wg",
    authDomain: "whatsapp-clone-2c53b.firebaseapp.com",
    projectId: "whatsapp-clone-2c53b",
    storageBucket: "whatsapp-clone-2c53b.appspot.com",
    messagingSenderId: "689042217102",
    appId: "1:689042217102:web:2b790bb92565223015d1df"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth , provider };
