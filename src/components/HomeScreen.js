


import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../hooks/useAuth';
import { Swipeable, direction } from 'react-deck-swiper';
import './home.css';

const HomeScreen = () => {

 

  const { googleSignout, user } = useUserAuth();

  
     
  


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

    <div className='home__container'>

      <nav>

        <div className='home__avatar'>

          <img src={user.photoURL} alt='avatar'/>

        </div>
        <div className='home__logo'>

          <img src='https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon.png' alt='logo'/>

        </div>
        <div className='home__chat'>
               
          

        </div>


      </nav>

      <div>
      <Swipeable>
      <div className="card">
        Your card content here
      </div>
    </Swipeable>
      </div>




       

       
    </div>
  )
  
};

export default HomeScreen;
