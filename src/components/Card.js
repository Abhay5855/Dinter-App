import React, { useState } from "react";
import "./tindercard.css";
import TinderCard from "react-tinder-card";

const Card = () => {
  

  const [people, setPeople] = useState([
    {
      name: "Rutkar",
      url: "https://scontent.fnag4-1.fna.fbcdn.net/v/t1.6435-9/p843x403/117592367_657281824883893_1397295896497917495_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=84a396&_nc_ohc=9rc2Vwyq9HAAX-uwB38&_nc_oc=AQlPQHkuDL7gNX0BUiOgmLbQpl4Pnk6cr8VH4852HSu6dV1FQBwUwFGityAeeCFniDZ9jQSjGTBbxMvi9uJU2D13&tn=L-1wmDopkrB64zdZ&_nc_ht=scontent.fnag4-1.fna&oh=00_AT-71_mge8wbGDXD9gK7XlvINIrSlbgeIndeN7-ucdOIpw&oe=622B53BD",
      age : 24,
      Github : 'rutkarverma07'
    },
    {
      name: "Sanika",
      url: "https://scontent.fnag4-1.fna.fbcdn.net/v/t1.6435-9/s851x315/145050096_888591505014385_1337213454963259110_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=da31f3&_nc_ohc=0rSFz2LQOyUAX9zsDha&_nc_ht=scontent.fnag4-1.fna&oh=00_AT_cxIsQjx8JtOH8gYUGtj2ulDHRLZf_HrtJdJSJRkLRtQ&oe=622A7383",
      age: 23,
      Github : 'Sanika02',
    },

    {
      name: "Abhay",
      url: "https://scontent-pnq1-1.xx.fbcdn.net/v/t31.18172-8/s851x315/29744283_2051089331839146_4452588607893092629_o.jpg?_nc_cat=104&ccb=1-5&_nc_sid=da31f3&_nc_ohc=RRFk06kCdBIAX-DQF-A&_nc_ht=scontent-pnq1-1.xx&oh=00_AT8uGnVErhiDaJG4zt58ZMIBFRMz2bLQBrufuPU9BgNQMg&oe=622A150E",
      age: 23,
      Github : 'Abhay5855'
    },
  ]);

  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction);
    console.log('swipe');
  }
  return (
    <>
    <div className="home__cards">
      
    
      

      {people.map((item) => (
        <TinderCard
          key={item.name}
          // onSwipe={onSwipe}s
          onSwipe={onSwipe}
          onCardLeftScreen={() =>  console.log('left')}
          preventSwipe={["up", "down"]}
          className="swipe"
        >

          <div className="tindercard__container">
          <div
            className="card__image"
            style={{ backgroundImage: `url(${item.url})` }}
          ></div>

          <div>

          <div className="details">

            <div className="details1">

            <p>{item.name}</p>
            <p><a href="#">View Github/portfolio</a></p>

            </div>
            

            <div className="details2">
             
              <span>Age: {item.age}</span>
              <span>Job: MihoLearn</span>
             
           

            
        
          </div>
          </div>

          </div>

         

        

         

          </div>

        
        </TinderCard>
      ))}
    </div>
    </>
  );
};

export default Card;
