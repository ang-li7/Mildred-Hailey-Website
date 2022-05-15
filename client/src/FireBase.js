import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
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
  const [email, setEmail] = useState(null);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email);
        setVerified(user.emailVerified);
      } else {
        setEmail(null);
        setVerified(false);
      }
    });
  }, []);

  const handleLogin = () => {
    signInWithGoogle().then((result) => {
      fetch("/api/admins").then((res) => {
        res.json().then((res) => {
          // only allow login if admin email
          if (res.includes(result.user.email)) {
            setEmail(result.user.email);
            setVerified(result.user.emailVerified);
          } else {
            handleLogout().then((res) => {
              alert("Email not authorized");
            });
          }
        });
      });
    });
  };

  const handleLogout = async () => {
    const res = await signOut(auth);
    setEmail(null);
    setVerified(false);
    return res;
  };

  return (
    <UserContext.Provider
      value={{ email, verified, handleLogin, handleLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};
