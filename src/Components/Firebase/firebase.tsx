import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC7gjIEC49S-u772T1Y39KvDmhyFS3Fj2w",
  authDomain: "coolapp-5ad26.firebaseapp.com",
  databaseURL: "https://coolapp-5ad26.firebaseio.com",
  projectId: "coolapp-5ad26",
  storageBucket: "coolapp-5ad26.appspot.com",
  messagingSenderId: "162084239074",
  appId: "1:162084239074:web:0d13fef94d04347b7190bb",
};

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
  }

  doCreateUserWithEmailAndPassword = (email: string, password: string) =>
    firebase.auth().createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email: string, password: string) =>
    firebase.auth().signInWithEmailAndPassword(email, password);

  doSignOut = () => firebase.auth().signOut();

  auth = () => firebase.auth();

  database = () => firebase.database();
}

export default Firebase;
