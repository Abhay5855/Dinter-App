


import React from 'react'
import { useMatch } from '../../hooks/useMatch';

const Match = () => {
     const {loginuser , swiped } = useMatch();

     console.log(swiped);
  return (
    <></>
  )
}

export default Match