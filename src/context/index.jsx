import { Children, createContext, useEffect, useState } from "react"
import React from "react";
import { useFetch } from "../Hooks/usefetch";

const defaultUser = {
    counter: "0"
}

export const GlobalContext = createContext(); 

export const AppContext = ({children}) => {
  const [contextState, setContextState] = useState(defaultUser); 

     return(
      <GlobalContext.Provider value={{contextState, setContextState}}>
        {children}
      </GlobalContext.Provider>
     )
}


