import React, { useState } from "react";
import { useUserAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import './login.css'
const Login = () => {
  const { googleSignIn, user } = useUserAuth();

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

    <div className="login__container"> 

       <div className="desc">


          

         
      
       </div>

    </div>
      <div>Login</div>

      <button onClick={handleGoogleSignIn}>Sign in Google</button>
    </>
  );
};

export default Login;
