// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXcEFiHUadyADybKh-GSldWyTFCiqYt8c",
  authDomain: "embtec-konzultz.firebaseapp.com",
  projectId: "embtec-konzultz",
  storageBucket: "embtec-konzultz.appspot.com",
  messagingSenderId: "445415550413",
  appId: "1:445415550413:web:395f61e41be0cb3b802884"
};

// Initialize Firebase

initializeApp(firebaseConfig);
export const db = getFirestore()