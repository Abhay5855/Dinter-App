import { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut ,
} from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  //  state to check the user
  const [user, setUser] = useState(null);

  // google signin function
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  // Check wether the user is there or not
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <userAuthContext.Provider value={{ user, googleSignIn }}>
      {children}
    </userAuthContext.Provider>
  );
}
//custom function with the context passed
export function useUserAuth() {
  return useContext(userAuthContext);
}
