


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../hooks/useAuth';

const HomeScreen = () => {

  const { googleSignout } = useUserAuth();


  const navigate = useNavigate();

    const logout = async(e) => {
        e.preventDefault();

        try {
            
            await googleSignout();
            navigate('/');
            console.log('logout successful');
        }
        catch(err) {
              console.log(err);
        }

    }


  return (

    <div>
        <button onClick={logout}>
          Logout
        </button>
    </div>
  )
  
};

export default HomeScreen;
