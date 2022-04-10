// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLwWMFcae1yBhdVHSq5LCw1Sg_VDkX718",
  authDomain: "ema-john-simple-fbb1d.firebaseapp.com",
  projectId: "ema-john-simple-fbb1d",
  storageBucket: "ema-john-simple-fbb1d.appspot.com",
  messagingSenderId: "936742699371",
  appId: "1:936742699371:web:ac0fb47fb488eaaa980c2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;