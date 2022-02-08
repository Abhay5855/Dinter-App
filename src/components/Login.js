


import React from 'react';
import GoogleButton from "react-google-button";

const Login = () => {

    console.log('Heena');

    function handleGoogleSignIn() {
            
    }
  return (

    <>

    <div>
        Login
    </div>

     <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
          </>
  )
  
};

export default Login;
