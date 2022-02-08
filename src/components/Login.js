import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { googleSignIn } = useUserAuth();


  const [error , setError] = useState(null);
 

  const navigate = useNavigate();

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn ();
      navigate("/home");
    } catch (error) {
       
         setError(error);
    }
  };

  return (
    <>
      <div>Login</div>

      <GoogleButton
        className="g-btn"
        type="dark"
        onClick={handleGoogleSignIn}
      />
    </>
  );
};

export default Login;
