// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAyU1zBDJOaoMJyZLvH_xZRyv2GCsa-KpQ",
  authDomain: "unscrapmedia-e09be.firebaseapp.com",
  databaseURL: "https://unscrapmedia-e09be-default-rtdb.firebaseio.com",
  projectId: "unscrapmedia-e09be",
  storageBucket: "unscrapmedia-e09be.appspot.com",
  messagingSenderId: "548325899768",
  appId: "1:548325899768:web:eb3ae20b1a4733bf7daa0d",
  measurementId: "G-QNVCFDNG4B",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };
