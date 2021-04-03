import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDAdxByk1CGA0vqD84Yo0Obp13tKgHUOuY",
  authDomain: "ecomaz-638c3.firebaseapp.com",
  projectId: "ecomaz-638c3",
  storageBucket: "ecomaz-638c3.appspot.com",
  messagingSenderId: "908964636647",
  appId: "1:908964636647:web:338dca72480d908891bf42",
  measurementId: "G-15VDVW5DJP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };