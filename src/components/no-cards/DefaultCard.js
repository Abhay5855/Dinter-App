

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
            <div className="defaultindercard__container">

              <div className='details1'>
                <p>NO CARDS</p>
              </div>
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