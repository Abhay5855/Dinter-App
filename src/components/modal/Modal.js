import React from "react";

const Modal = () => {
  return (
    <div className="modal__container">
      <div>
        <p>Step 1: The Profile Pic</p>

        <input placeholder="Enter A Profile Pic URL" type="text" />
      </div>
      <div>
        <p>Step 2: The Job</p>

        <input placeholder="Enter your job" type="text" />
      </div>
      <div>
        <p>Step 3: Github/Portfolio URL</p>

        <input placeholder="Enter Your Github/Portfolio URL" type="text" />
      </div>
      <div>
        <p>Step 4: Enter Age</p>

        <input placeholder="Enter Your Age" type="text" />
      </div>
      <div>
        <p>Step 5: Enter Total Experience</p>

        <input placeholder="Enter A Profile Pic URl" type="text" />
      </div>
    </div>
  );
};

export default Modal;
