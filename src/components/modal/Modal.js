import React, { useState } from "react";
import "./modal.css";
import { useUserAuth } from "../../hooks/useAuth";
import { doc, setDoc } from "firebase/firestore"; 

const Modal = () => {
  // Calling the user
  const { user } = useUserAuth();

  //calling the states
  const [profile, setProfile] = useState("");
  const [devlink, setDevlink] = useState("");
  const [age, setAge] = useState("");
  const [experience, setExperience] = useState("");
  const [job, setJob] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="modal__container">
      <div className="modal__logo">
        <img
          src="https://tinder.com/static/build/6dcd593a7d278a1a1e52eff1f03365bb.svg"
          alt="logo"
        />
      </div>

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
