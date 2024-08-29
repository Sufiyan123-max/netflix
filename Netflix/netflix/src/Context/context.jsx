import { createContext, useState } from "react";
import netflix_data from "../Netflix_data";
export const context=createContext();
export default function AppContextProvider({children}){
    const [isloggedin,setloggedin]=useState(false);
    const [isvisible,setvisible]=useState(false);
    function clickHandler(id){

    }
    const value={
        isloggedin,setloggedin,netflix_data,clickHandler
    }
    return <context.Provider value={value}>
            {children}
          </context.Provider>
}