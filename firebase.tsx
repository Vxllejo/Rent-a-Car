// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB13Bjd2GUhDILOleiVmL5ikciMKUDH2d0",
  authDomain: "carrentapp-8ba44.firebaseapp.com",
  projectId: "carrentapp-8ba44",
  storageBucket: "carrentapp-8ba44.appspot.com",
  messagingSenderId: "620528282990",
  appId: "1:620528282990:web:57068eb12632f7a7bce57f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);