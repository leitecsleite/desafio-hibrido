import { useEffect, useRef, useState } from "react";


export const useFetch = (url, options) => {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const urlRef = useRef(url); //criar referencia de memoria 
    const optionsRef =useRef(options); 
   
    useEffect(() => {
      setLoading(true); 
      const fetchData = async () => {
        try{
          const response = await fetch(urlRef.current, optionsRef.current);
          const jsonResult = await response.json();
  
          setResult(jsonResult); 
          setLoading(false); 
        }catch (e){
          setLoading(false); 
          throw e; 
        }
      }
      fetchData();
    }, []);
  
    return [result, loading];
  };

//export const  globalData = useFetch('https://fakestoreapi.com/products/');
//console.log(globalData)
  //'https://jsonplaceholder.typicode.com/posts/'