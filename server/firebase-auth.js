import { initializeApp } from "firebase/app";

require("dotenv").config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "mildred-hailey.firebaseapp.com",
  projectId: "mildred-hailey",
  storageBucket: "mildred-hailey.appspot.com",
  messagingSenderId: "590269279825",
  appId: "1:590269279825:web:ccf16a2f2255f88e8fd270",
  measurementId: "G-52C2WTC8PY",
};

const app = initializeApp(firebaseConfig);
