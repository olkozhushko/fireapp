import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyApxnwO3rYxjcNYZaKMP0HLuRnV_3tLtuU',
  authDomain: 'firevueoleh.firebaseapp.com',
  projectId: 'firevueoleh',
  storageBucket: 'firevueoleh.appspot.com',
  messagingSenderId: '296420376309',
  appId: '1:296420376309:web:95804c807de1a82ad90fbc',
  measurementId: 'G-ED6MJEBTSK',
  databaseURL: 'https://firevueoleh.firebaseio.com',
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
