import React, { useState } from "react";
import "./modal.css";
import { useUserAuth } from "../../hooks/useAuth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore"; 
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Modal = () => {
  // Calling the user
  const { user, googleSignIn } = useUserAuth();

  //calling the states
  const [profile, setProfile] = useState("");
  const [devlink, setDevlink] = useState("");
  const [age, setAge] = useState("");
  const [experience, setExperience] = useState("");
  const [job, setJob] = useState("");

    const navigate = useNavigate();

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
       console.log('login successful');
    } catch (error) {
      // setError(error);
    }
  };
    // update the Profile
   

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
        age : age,
        job : job,
        experience : experience,
        devlink : devlink,
        name : user.displayName,
        id : user.uid,
        profile : profile,


    }

    console.log(data);

    setDoc(doc(db, 'users', user.uid), {
        id : user.uid,
        name : user.displayName,
        photoURL : profile,
        age : age,
        experience : experience,
        job : job,
        devlink : devlink,
        // timestamp : serverTimestamp,
        
      })
      .then(() => {
          console.log('success');
      })
      .catch((err) => {
           console.log(err.message);
      })

  };




  return (
    <div className="modal__container">
      <div className="modal__logo">
        <img
          src="https://tinder.com/static/build/6dcd593a7d278a1a1e52eff1f03365bb.svg"
          alt="logo"
        />
      </div>

      <button onClick={handleGoogleSignIn}>Sign in Google</button>

      {/* <p className="welcome">Welcome {user.displayName}</p> */}

      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="modal__links">
          <p>Step 1: The Profile Pic</p>

          <input
            placeholder="Enter A Profile Pic URL"
            type="text"
            value={profile}
            onChange={(e) => setProfile(e.target.value)}
          />
        </div>
        <div className="modal__links">
          <p>Step 2: The Job</p>

          <input
            placeholder="Enter your job"
            type="text"
            value={job}
            onChange={(e) => setJob(e.target.value)}
          />
        </div>
        <div className="modal__links">
          <p>Step 3: Github/Portfolio URL</p>

          <input
            placeholder="Enter Github/Portfolio URL"
            type="text"
            value={devlink}
            onChange={(e) => setDevlink(e.target.value)}
          />
        </div>
        <div className="modal__links">
          <p>Step 4: Enter Age</p>

          <input
            placeholder="Enter Your Age"
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="modal__links">
          <p>Step 5: Enter Total Experience</p>

          <input
            placeholder="Enter Experience In Yrs"
            type="text"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>

        <button className="update__btn" type="submit">
          Add Changes
        </button>
      </form>
    </div>
  );
};

export default Modal;
