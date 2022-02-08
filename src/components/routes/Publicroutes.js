


import React from 'react';
import Login from '../Login';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
const Publicroutes = () => {

  return <div>
      <BrowserRouter>

      <Routes>
          <Route path='/' element={<Login />}>

          </Route>
      </Routes>
      </BrowserRouter>

  
  </div>;
};

export default Publicroutes;
