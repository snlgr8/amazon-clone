import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyDR5__by6_U-QgKgRu3neFHP56UPnvqemE',
  authDomain: 'clone-4f50c.firebaseapp.com',
  projectId: 'clone-4f50c',
  storageBucket: 'clone-4f50c.appspot.com',
  messagingSenderId: '726941961460',
  appId: '1:726941961460:web:e6357e269f7cb7eff1e2a1',
  measurementId: 'G-65DNT8QW8K',
});

const db = firebase.firestore();

export { db };
