import { createContext } from "react";
import { useState } from "react";
import { userObserver } from "../auth/firebase";
import { useEffect } from "react";


export const AuthContext = createContext()

const AuthContextProvider = ({children})=>{
    const [currentUser, setCurrentUser] = useState(false)
    useEffect(() => {
    userObserver(setCurrentUser)
    }, [])
    

    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider