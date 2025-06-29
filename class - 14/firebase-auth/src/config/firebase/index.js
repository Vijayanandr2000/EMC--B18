// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD931mEOj6-NXgzkhrNd_zcbdsEAVV-X_o",
  authDomain: "deft-waters-279706.firebaseapp.com",
  projectId: "deft-waters-279706",
  storageBucket: "deft-waters-279706.firebasestorage.app",
  messagingSenderId: "712357471307",
  appId: "1:712357471307:web:c1130afba5cfd3117ed9ce",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
