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
  // const [error , setError] = useState(null);

  // google signin function
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  //google signout 
   function googleSignout(){

    signOut(auth).then(() => {
      // Sign-out successful.

    }).catch((error) => {
      // An error happened.
      console.log(error);
      // setError(error);
    });

   }

  // Check wether the user is there or not
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log('user');
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <userAuthContext.Provider value={{ user, googleSignIn , googleSignout }}>
      {children}
    </userAuthContext.Provider>
  );
}
//custom function with the context passed
export function useUserAuth() {
  return useContext(userAuthContext);
}
