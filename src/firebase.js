// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {getAuth} from firebase/auth;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBGLrydbovu4VoRPMAUSVV7cdJKF8udzeY',
  authDomain: 'hamromcq.firebaseapp.com',
  projectId: 'hamromcq',
  storageBucket: 'hamromcq.appspot.com',
  messagingSenderId: '26775419773',
  appId: '1:26775419773:web:cd6e50bdbf539d05faea14',
  measurementId: 'G-7RYS10XEY5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = getAuth();

export { app, auth };