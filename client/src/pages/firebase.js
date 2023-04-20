import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './base';

firebase.initializeApp(firebaseConfig);

export default firebase;
