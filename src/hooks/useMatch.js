




import { createContext, useContext, useState } from "react";


const UserMatchContext = createContext();

export function UserMatchContextProvider({children}) {

        const [loginuser , setLoginuser] = useState('');

        const [swiped , setSwiped] = useState('');

       return (
            
           <UserMatchContext.Provider value={{loginuser , swiped , setLoginuser , setSwiped}}>

               {children}

           </UserMatchContext.Provider>
       )
}


export function useMatch() {
        return useContext(UserMatchContext);
}