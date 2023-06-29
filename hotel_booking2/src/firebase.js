// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjfKzAMzUx_925p51bXuk6bsyfenneTE0",
  authDomain: "bookstay-ce7c4.firebaseapp.com",
  projectId: "bookstay-ce7c4",
  storageBucket: "bookstay-ce7c4.appspot.com",
  messagingSenderId: "90461908782",
  appId: "1:90461908782:web:cb25556ae0afee1d1854bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };