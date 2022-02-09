import React, { useState } from "react";
import "./tindercard.css";
import TinderCard from "react-tinder-card";

const Card = () => {
  console.log("these are cards");

  const [people, setPeople] = useState([
    {
      name: "Rutkar",
      url: "https://i.pinimg.com/236x/53/bc/36/53bc36e0651c5eb7e1317cb8988da55e.jpg",
    },
    {
      name: "Sanika",
      url: "https://i.pinimg.com/236x/09/5b/8e/095b8e37637b2edc37f21f4d2745c089.jpg",
    },

    {
      name : 'Abhay',
      url : 'https://scontent-pnq1-1.xx.fbcdn.net/v/t31.18172-8/s851x315/29744283_2051089331839146_4452588607893092629_o.jpg?_nc_cat=104&ccb=1-5&_nc_sid=da31f3&_nc_ohc=RRFk06kCdBIAX-DQF-A&_nc_ht=scontent-pnq1-1.xx&oh=00_AT8uGnVErhiDaJG4zt58ZMIBFRMz2bLQBrufuPU9BgNQMg&oe=622A150E'
    }
  ]);
  return (
    <div className="home__cards">
      {people.map((item) => (
        <TinderCard
          key={item.name}
          // onSwipe={onSwipe}
          // onCardLeftScreen={() => onCardLeftScreen("fooBar")}
          preventSwipe={["top", "bottom"]}
          className="swipe"
        >
          <div
            className="card__image"
            style={{ backgroundImage: `url(${item.url})` }}
            
          >
           
          </div>
        </TinderCard>
      ))}
    </div>
  );
};

export default Card;
