import { useState,useEffect } from "react";

const useFetch=(url)=>{
    const [data,setData] = useState(null); 
    const [Ispending,setIsPending] =useState(true);
    const [name,setName] = useState('abcd');
    const [error, setError] = useState(null);

    useEffect(()=>{
        const abortConst= new AbortController();
        // console.log("changes");
         fetch(url,{signal:abortConst.signal})
            .then(res => {
             console.log(res);
             if(!res.ok){
               throw Error('could not fetch data');
             }
              return res.json();
            })
            .then(data => {
              // console.log(data)
               setData(data)
               setIsPending(false)
            })
            .catch(err => {
            if(err.name==='AbortError'){
                console.log('fetch abort');
            }else{
             setError(null);
             setIsPending(false);
            setError(err.message)
            }
            })
          return ( )=> abortConst.abort();
       },[url]);
       return {data,Ispending,error}
}
export default useFetch;