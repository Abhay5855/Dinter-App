import { createContext, useContext } from "react"






export const AuthProvider = ({children}) => {

    
const AuthContext = createContext({});


       return (
           <>
           <AuthContext.Provider value={{user : 'Heena'}}>
           {children}

           </AuthContext.Provider>

           
           </>
       )
}


export default function useAuth() {

    return useContext(AuthProvider);

}

