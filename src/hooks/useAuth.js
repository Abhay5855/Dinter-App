import { createContext, useContext } from "react";
import {signInWithPopup, GoogleAuthProvider, GoogleAuthProvider } from "firebase/auth";
import {auth} from '../firebase'

export const AuthProvider = ({ children }) => {
  const AuthContext = createContext({});


  //creating a function for google signin

  function googleSignin() {

           const GoogleAuthProvider = new GoogleAuthProvider();

           return signInWithPopup(auth , GoogleAuthProvider);
  }


  return (
    <>
      <AuthContext.Provider value={googleSignin}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default function useAuth() {
  return useContext(AuthProvider);
}
