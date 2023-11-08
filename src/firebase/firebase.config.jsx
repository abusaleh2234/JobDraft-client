// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuJfKCkTDameL-MHqSmVA0LR_TNpdXqHo",
  authDomain: "job-draft-deb43.firebaseapp.com",
  projectId: "job-draft-deb43",
  storageBucket: "job-draft-deb43.appspot.com",
  messagingSenderId: "455864469371",
  appId: "1:455864469371:web:d129c9faf3893464be9fde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
