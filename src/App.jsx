import { useContext } from "react";
import React from "react";
import { useFetch } from "./Hooks/usefetch";

import "./App.css";
import { PDP } from "./page/PDP/pdp";
import { AppContext } from "./context";

function App() {
  const [result, loading] = useFetch("https://fakestoreapi.com/products/");
  const produto = result.slice(0, 1);
  
  return(
   <AppContext>
     <PDP/>
   </AppContext> 
    
  )

  }

   
export default App; 
