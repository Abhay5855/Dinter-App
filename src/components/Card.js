import React, { useState } from "react";
import "./tindercard.css";
import TinderCard from "react-tinder-card";

const Card = () => {
  console.log("these are cards");

  const [people, setPeople] = useState([
    {
      name: "Rutkar",
      url: "https://scontent-pnq1-1.xx.fbcdn.net/v/t39.30808-6/203966403_883425652269508_503938288423806748_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=IYPyjCXjUg4AX_QmaOs&_nc_ht=scontent-pnq1-1.xx&oh=00_AT8JdUWNYMjYERzrFQ-NnOy8TP1-SaAiUiZXqp2x_C-cTg&oe=6208294D",
    },
    {
      name: "Sanika",
      url: "https://scontent.fnag1-3.fna.fbcdn.net/v/t1.6435-9/145050096_888591505014385_1337213454963259110_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=0rSFz2LQOyUAX8tfiXY&_nc_ht=scontent.fnag1-3.fna&oh=00_AT9U6P57aSffLBERTlu6Ao4UV7bNccLr6jP3X3JEd8pyYg&oe=6227E294",
    },
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
