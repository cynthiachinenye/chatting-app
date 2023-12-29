import { createContext, useEffect, useState} from "react";
import {auth} from "../../Firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext()
export const AuthContextProvider =({children}) =>{
    const [currentUser,setCurrentUser] = useState({})

    useEffect(()=>{
       const onsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            console.log(user)
        });
        return () =>{
         onsub();
        };
    },[]);

    <AuthContext.Provider value={{currentUser}}>
    {children}
    </AuthContext.Provider>
}