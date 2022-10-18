// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyAmFZm5rKU74K6ONoPgHzrwuqL_LCqjAIw",
    authDomain: "twitter-clone-u09.firebaseapp.com",
    projectId: "twitter-clone-u09",
    storageBucket: "twitter-clone-u09.appspot.com",
    messagingSenderId: "172874580824",
    appId: "1:172874580824:web:432908329e205262265b2d"
  };

  // Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };