import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../hooks/useAuth";
import TinderCard from "react-tinder-card";
import "./home.css";

const HomeScreen = () => {
  const { googleSignout, user } = useUserAuth();

  const navigate = useNavigate();

  const logout = async (e) => {
    e.preventDefault();

    try {
      await googleSignout();
      navigate("/");
      console.log("logout successful");
    } catch (err) {
      console.log(err);
    }
  };


  //tinder cards
  
const onSwipe = (direction) => {
  console.log('You swiped: ' + direction)
}

const onCardLeftScreen = (myIdentifier) => {
  console.log(myIdentifier + ' left the screen')
}


  return (
    <div className="home__container">
      <nav>
        <div className="home__avatar">
          <img src={user.photoURL} alt="avatar" />
        </div>
        <div className="home__logo">
          <img
            src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon.png"
            alt="logo"
          />
        </div>
        <div className="home__chat"></div>
      </nav>

      {/* react card */}

      <div className="home__cards">
        <TinderCard
          onSwipe={onSwipe}
          onCardLeftScreen={() => onCardLeftScreen("fooBar")}
          preventSwipe={["top", "bottom"]}
          className='swipe'
        >
          <div className="card__image" style={{backgroundImage : `url(${user.photoURL})`}}>
        
          </div>
        </TinderCard>
      </div>
    </div>
  );
};

export default HomeScreen;
