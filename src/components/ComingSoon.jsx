import React from 'react'
import "../components/css/comingsoon.css"
import { useState,useEffect } from 'react';
const ComingSoon = () => {
    const [timeLeft, setTimeLeft] = useState({
        weeks: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    
      useEffect(() => {
        const releaseDate = new Date("2023-07-30"); // Replace this with your release date
        const intervalId = setInterval(() => {
          const currentDate = new Date();
          const differenceInTime = releaseDate.getTime() - currentDate.getTime();
          const weeks = Math.floor(differenceInTime / (1000 * 60 * 60 * 24 * 7));
          const days = Math.floor(
            (differenceInTime % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
          );
          const hours = Math.floor(
            (differenceInTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const minutes = Math.floor(
            (differenceInTime % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((differenceInTime % (1000 * 60)) / 1000);
          setTimeLeft({ weeks, days, hours, minutes, seconds });
        }, 1000);
        return () => clearInterval(intervalId);
      }, []);
  return (
    <div className='coming'>
    <h1>TEZLİKLƏ...</h1>
    <div className='days'>
    <p>
      {timeLeft.weeks} həftə
    </p>
    <p>
    {timeLeft.days} gün
    </p>
    
    <p>
    {timeLeft.hours} saat
    </p>

    <p>
    {timeLeft.minutes} dəqiqə
    </p>

    <p>
    {timeLeft.seconds} saniyə
    </p>
    </div>
  </div>
  )
}

export default ComingSoon