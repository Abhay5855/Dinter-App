import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { googleSignIn } = useUserAuth();

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
       console.log('login successful');
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      <div>Login</div>

      <button onClick={handleGoogleSignIn}>Sign in Google</button>
    </>
  );
};

export default Login;
