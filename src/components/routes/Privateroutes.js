


import React from 'react';
import ChatScreen from '../ChatScreen';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import HomeScreen from '../HomeScreen';
  

const Privateroutes = () => {
  return <div>

<BrowserRouter>
    <Routes>
      <Route path="/chat" element={<ChatScreen />}>
          </Route>
      
        <Route path="/home" element={<HomeScreen />}>
         
        </Route>
      
    </Routes>
  </BrowserRouter>
      

    
      

  </div>;
};

export default Privateroutes;
