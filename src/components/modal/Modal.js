import React from "react";
import "./modal.css";

const Modal = () => {
  return (
    <div className="modal__container">

        <div className="modal__logo">
            <img src='https://tinder.com/static/build/6dcd593a7d278a1a1e52eff1f03365bb.svg' alt='logo'/>
        </div>

        <form autoComplete="off">

        

      <div className="modal__links">
        <p>Step 1: The Profile Pic</p>

        <input placeholder="Enter A Profile Pic URL" type="text" />
      </div>
      <div className="modal__links">
        <p>Step 2: The Job</p>

        <input placeholder="Enter your job" type="text" />
      </div>
      <div className="modal__links">
        <p>Step 3: Github/Portfolio URL</p>

        <input placeholder="Enter Github/Portfolio URL" type="text" />
      </div>
      <div className="modal__links">
        <p>Step 4: Enter Age</p>

        <input placeholder="Enter Your Age" type="text" />
      </div>
      <div className="modal__links">
        <p>Step 5: Enter Total Experience</p>

        <input placeholder="Enter A Profile Pic URl" type="text" />
      </div>
     
          
      <button className="update__btn" type="submit">Add Changes</button>

     

      </form>
    </div>
  );
};

export default Modal;
