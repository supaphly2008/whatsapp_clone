import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyALDYbRfrIuX4AchPhDfRV5KJd8sroNB5Q",
  authDomain: "whatsapp-clone-e7132.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-e7132.firebaseio.com",
  projectId: "whatsapp-clone-e7132",
  storageBucket: "whatsapp-clone-e7132.appspot.com",
  messagingSenderId: "35169083926",
  appId: "1:35169083926:web:2ff2db16dde26e9ac7cb37",
  measurementId: "G-HEPG3FZ0ZH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default database;
