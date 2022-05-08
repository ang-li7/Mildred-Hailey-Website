import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { UserContext } from "./UserContext";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyDnN-LZg3f6x_m2o4UMwHd2Om6ZVvaSnX8",
  authDomain: "mildred-hailey.firebaseapp.com",
  projectId: "mildred-hailey",
  storageBucket: "mildred-hailey.appspot.com",
  messagingSenderId: "590269279825",
  appId: "1:590269279825:web:ccf16a2f2255f88e8fd270",
  measurementId: "G-52C2WTC8PY",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const AuthStateProvider = ({ children }) => {
  const [email, setEmail] = useState("hi");
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setEmail(user.email);
      setVerified(user.emailVerified);
    });
  }, []);

  const handleLogin = () => {
    signInWithGoogle().then((result) => {
      setEmail(result.user.email);
      setVerified(result.user.emailVerified);
    });
  };

  return (
    <UserContext.Provider value={{ email, verified, handleLogin }}>
      {children}
    </UserContext.Provider>
  );
};
