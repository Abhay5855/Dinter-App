import React, { useEffect, useLayoutEffect, useState } from "react";
import "./tindercard.css";
import TinderCard from "react-tinder-card";
import { collection, onSnapshot, serverTimestamp } from "firebase/firestore";
import { doc, setDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { useUserAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import DefaultCard from "./no-cards/DefaultCard";
import compareId from "../lib/compareId";

const Card = () => {
  const { user } = useUserAuth();

  const [profiles, setProfiles] = useState([]);




  // const [profiles, setProfiles] = useState([
  //   {
  //     name : 'Abhay',
  //     age : 23,
  //     job : 'react dev',
  //     photoURL : 'https://scontent.fpnq7-4.fna.fbcdn.net/v/t1.6435-9/s851x315/68615542_2382368328711243_690095807315050496_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=da31f3&_nc_ohc=JeISkiuOsWIAX8_gI9Z&_nc_ht=scontent.fpnq7-4.fna&oh=00_AT_k2cODgCbo2_wkDetFdpXZ3skj1Y3VSFl3PaA0aSIXDw&oe=622D01A5'
  //   },

  //   {
  //     name : 'Sanika',
  //     age : 24,
  //     job : 'analyst',
  //     photoURL : 'https://www.facebook.com/photo/?fbid=1001599010380300&set=pob.100015906306605'
  //   },
  //   {
  //     name : 'rutkar',
  //     age : 25,
  //     job : 'team lead',
  //     photoURL : 'https://scontent.fpnq7-4.fna.fbcdn.net/v/t1.6435-9/s851x315/117592367_657281824883893_1397295896497917495_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=da31f3&_nc_ohc=bKmjqz30qeUAX9OK5KN&_nc_oc=AQkE8LEBJpzZgmZaeo6jyKnxTZM2mNxugmP_67c11iJp1QyvcZzKA3GkHnmaCEEU1AnMyzdgY6tAPM-5waz7IUSY&_nc_ht=scontent.fpnq7-4.fna&oh=00_AT8GHXYGC0qrhrS4fqU0AF0vPFBMMVJP_P7i1tQs2R98hA&oe=622C2BB7'
  //   }
  // ]);

  const navigate = useNavigate();

  // check if the users are present  from the firebase database;
  useLayoutEffect(() => {
    onSnapshot(doc(db, "users", user.uid), (snapshot) => {
      if (!snapshot.exists) {
        navigate("/modal");
      }
    });
  }, []);

  // get the users from fireabsee database
  useEffect(() => {
    let unsubscribe;

    const fetchData = async () => {
      // passes consist of the passes that user swiped to the left -> nope
      const passes = await getDocs(
        collection(db, "users", user.uid, "passes")
      ).then((snapshot) => snapshot.docs.map((doc) => doc.id));

      // swipes consist of the matches that user swiped right side -> match
      const swipes = await getDocs(
        collection(db, "users", user.uid, "swipes")
      ).then((snapshot) => snapshot.docs.map((doc) => doc.id));

      // Check the passes and swipes length and if exist pass the passes and swipes else pass an array with string -> note that array shoul not be passed empty.
      const passedUserIds = passes.length > 0 ? passes : ["test"];
      const swipedUserIds = swipes.length > 0 ? swipes : ["test"];

      //check the ery method wethe the ids are peresent or not
      unsubscribe = onSnapshot(
        query(
          collection(db, "users"),
          where("id", "not-in", [...passedUserIds, ...swipedUserIds])
        ),
        (snapshot) => {
          setProfiles(
            snapshot.docs
              // First filter out so that our own profile should not be shown
              .filter((doc) => doc.id !== user.uid)
              .map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }))
          );
        }
      );

      console.log([...passedUserIds, ...swipedUserIds]);
    };

    fetchData();
    // unsubscribe to the changes
    return unsubscribe;
  }, [db]);

  //function to check the direaction of the swipe
  const onSwipe = async (direction, idx) => {
    if (direction === "left") {
      //if no Profiles are there simply return
      if (!profiles[idx]) return;

      const userSwipped = profiles[idx];

      console.log(`You Passed ${userSwipped.job}`);

      setDoc(doc(db, "users", user.uid, "passes", userSwipped.id), userSwipped);
    }

    if (direction === "right") {
      if (!profiles[idx]) return;

      const userSwipped = profiles[idx];

      // Now If the user swipes right we need to get the user information from the db
      const loggedInProfile = await await getDocs(
        doc(db, "users", user.uid)
      ).data();

      //Check wether the user has swipped on you
      getDocs(doc(db, "users", userSwipped.id, user.uid)).then(
        (documentSnapshot) => {
          if (documentSnapshot.exists()) {
            // user has matched with you before you matched with them
            console.log(`HOORAY you matched with ${userSwipped.displayName}`);

            setDoc(
              doc(db, "users", user.uid, "swipes", userSwipped.id),
              userSwipped
            );

            //CREATE A MATCH
            setDoc(doc(db , 'matches' , compareId(user.uid , userSwipped.id)), {
                 
                  users : {
                       [user.uid] : loggedInProfile,
                       [userSwipped.id] : userSwipped
                  },

                  usersMatched : [user.uid , userSwipped.id],
                  timestamp : serverTimestamp(),

              
            });

            navigate("/Match" , {
                loggedInProfile,
                userSwipped,
            });
             
            

          } else {
            console.log(
              `you swipped on ${userSwipped.age} and ${userSwipped.displayName}`
            );

            setDoc(
              doc(db, "users", user.uid, "matches", userSwipped.id),
              userSwipped
            );
          }
        }
      );
    }
  };

  return (
    <>
      {profiles ? (
        <div className="home__cards">
          {profiles.map((item, idx) => (
            <TinderCard
              key={item.name}
              onSwipe={(direction) => {
                onSwipe(direction, idx);
              }}
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
      ) : (
        <DefaultCard />
      )}
    </>
  );
};

export default Card;
