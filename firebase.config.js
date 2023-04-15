// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvT-WKr42Dyn4R97ksfRM2j1Cjek-09Yc",
  authDomain: "mtb-mis.firebaseapp.com",
  projectId: "mtb-mis",
  storageBucket: "mtb-mis.appspot.com",
  messagingSenderId: "463568170761",
  appId: "1:463568170761:web:fb95fd133ffa96dc576dd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
