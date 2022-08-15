import React from 'react';
import './card.css';
import { useState, useEffect } from "react";


function Card({ name }) {

  const [dataState, setDataState] = useState()

  useEffect(() => {
    data(name);
    const intervalId = setInterval(() => {
      data(name);
      //Here you can change the time interval. 15000 miliseconds = 15 seconds.
    }, 15000);
    return () => clearInterval(intervalId);
  }, []);

  const data = async (value) => {
    await fetch(`https://api.factoryfour.com/${value}/health/status`)
      .then((res) => res.json())
      .then((data) => setDataState(data))
      .catch((err) => { console.log(err) });
  };

  let calculateTime = (number) => {
    let time = new Date(number)
    return time.toTimeString().split(" ")[0]
  }

  let actualTime = calculateTime(dataState?.time)


  return (
    <div className='card-container'>
      <h2 className='card-name'>{name.toString().toUpperCase()}</h2>
      <h3 className={dataState?.success ? "card-healthy" : "card-error"}>{dataState?.success ? "Healthy" : "Error"}</h3>
      <h4 className={dataState?.success ? "card-healthy-hostname" : "card-error-hostname"}>{dataState?.success ? dataState.hostname : "OUTAGE"}</h4>
      <h4 className={dataState?.success ? "card-healthy-time" : "card-error-time"}>{dataState?.success ? actualTime : "403 Forbidden"}</h4>
    </div>
  )
}

export default Card
