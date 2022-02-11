import React, { useEffect, useLayoutEffect, useState } from "react";
import "./tindercard.css";
import TinderCard from "react-tinder-card";
import { collection, onSnapshot } from "firebase/firestore";
import { doc} from "firebase/firestore"; 
import { db } from "../firebase";
import { useUserAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Card = () => {

   const {user} = useUserAuth();

   const [profiles , setProfiles] = useState([]);

 


  const navigate = useNavigate();

  // check if the users are present  from the firebase database;
  useLayoutEffect(() => {

    onSnapshot(doc(db, 'users' , user.uid) , (snapshot) => {

         console.log(snapshot);

         if(!snapshot.exists){

            navigate('/modal');

         }
    })



  },[])

  // get the users from fireabsee databvase
  useEffect(() => {
       let unsubscribe;

       const fetchData = async() => {

           unsubscribe = onSnapshot(collection(db , 'users'), snapshot => {

                 setProfiles(
                   snapshot.docs.map(doc => ({

                        id : doc.id,
                        ...doc.data(),
                   }))
                 )
           })

       }

       fetchData();

       return unsubscribe;
  },[])
  

  console.log(profiles , 'profiles')

  //function to check the direaction of the swipe
  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
    console.log("swipe");
  };

  return (
    <>
      <div className="home__cards">
        {profiles.map((item) => (
          <TinderCard
            key={item.name}
            onSwipe={onSwipe}
            preventSwipe={["up", "down"]}
            className="swipe"
          >
            <div className="tindercard__container">
              <div
                className="card__image"
                style={{ backgroundImage: `url(${item.photoURL})` }}
              ></div>

              <div>
                <div className="details">
                  <div className="details1">
                    <p>{item.name}</p>
                    <p>
                      <a href="#">View Github/portfolio</a>
                    </p>
                  </div>

                  <div className="details2">
                    <span>Age: {item.age}</span>
                    <span>Job: {item.job}</span>
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
