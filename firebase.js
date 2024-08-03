import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  setDoc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

// Your web app's Firebase configuration
/*const firebaseConfig = {
  apiKey: "AIzaSyCiD6BhRrYtWYEuSd-dYvE_WPOKf_pybx8",
  authDomain: "smit-batch-011.firebaseapp.com",
  projectId: "smit-batch-011",
  storageBucket: "smit-batch-011.appspot.com",
  messagingSenderId: "174924784108",
  appId: "1:174924784108:web:a8314be9465f99de3aa0c9",
};*/
const firebaseConfig = {
    apiKey: "AIzaSyDDI02mLG4frGRerIodYR2B7zJLX-RKQVI",
    authDomain: "first-firebase-project-d07af.firebaseapp.com",
    projectId: "first-firebase-project-d07af",
    storageBucket: "first-firebase-project-d07af.appspot.com",
    messagingSenderId: "715305896838",
    appId: "1:715305896838:web:c32f2bf6271f9cfb043a07"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Initialize Auth
const auth = getAuth();

export {
  app,
  db,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setDoc,
  getDoc,
};