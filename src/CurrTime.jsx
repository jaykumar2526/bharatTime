import {useState,useEffect} from "react";

let CurrrTime=()=>{
  let [time, setTime]= useState(new Date());

  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setTime(new Date());
    }, 1000);
  },[]);
  
    return <p
     className="col-0 pt-3 Times ">
    Date: {time.toLocaleDateString()} & Time: {time.toLocaleTimeString()}
  </p>
}

export default CurrrTime;

