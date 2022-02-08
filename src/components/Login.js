import React from "react";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { googleSignIn } = useUserAuth();

  console.log("Heena");
  const navigate = useNavigate();

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn ();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
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
