import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCQ5-nTKFkBpi80_xCnFR8tj7OAHLMIooE',
  authDomain: 'avn-prototype.firebaseapp.com',
  databaseURL: 'https://avn-prototype-default-rtdb.firebaseio.com',
  projectId: 'avn-prototype',
  storageBucket: 'avn-prototype.appspot.com',
  messagingSenderId: '966932925080',
  appId: '1:966932925080:web:45369bcd7369ab7ee61eed',
};

const FirebaseApp = firebase.initializeApp(firebaseConfig);
const db = FirebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
