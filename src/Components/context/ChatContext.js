import { createContext, useEffect, useState} from "react";
import {auth} from "../../Firebase";
import { onAuthStateChanged } from "firebase/auth";

export const ChatContext = createContext()
export const ChatContextProvider =({children}) =>{
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
    return(

    <ChatContext.Provider value={{currentUser}}>
    {children}
    </ChatContext.Provider>

    );
}