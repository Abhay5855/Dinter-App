

import React from 'react'
import TinderCard from "react-tinder-card";
import './default.css';


const DefaultCard = () => {
  return (
    <div>

           <h2>Default</h2>
             <div className="home__cards">
      
          <TinderCard
           
            preventSwipe={["up", "down"]}
            className="swipe"
          >
            <div className="tindercard__container">
              <div
                className="card__image"
                
              ></div>

             
            </div>
          </TinderCard>
    
      </div>

    </div>
  )
}

export default DefaultCard