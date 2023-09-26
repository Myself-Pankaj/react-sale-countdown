import React, { useEffect, useState } from "react";
import "./CountdownCardKit.css";

const addLeadingZero = (value) => {
  return value < 10 ? `0${value}` : value;
};

const CountdownCardKit = ({ imageUrl, endDate,title,description }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isCountdownOver, setIsCountdownOver] = useState(false);
 
  useEffect(() => {
    const futureDate = new Date(endDate);
    const countdownInterval = setInterval(calculateTimeLeft, 1000);
  
    calculateTimeLeft();
  
    return () => clearInterval(countdownInterval);
  
    function calculateTimeLeft() {
      const now = new Date().getTime();
      const timeDifference = futureDate - now;
      
      if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        
      } else {

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }
  }, [endDate]);
  useEffect(() => {
    setIsCountdownOver(
      timeLeft.days === 0 &&
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 &&
        timeLeft.seconds === 0
    );
  }, [timeLeft]);
  return (
    <div className="container">
      <main className="flex_box">
        <div className="img_div">
          <img src={imageUrl} alt="gift-img" width="100%" />
        </div>
        <aside className="aside_div">
          <h2>{title}</h2>
          <p>{description}</p>
          <h3>{title} Ends On {endDate}</h3>
          {isCountdownOver ? (
            <p className={`countdown-ended ${isCountdownOver ? '' : 'hidden'}`}>
            Time's up! The countdown has ended. 🎉
          </p>
          ) : (
            <div className="deadline" id="deadline">
              <div className="deadline-container">
                <h4 className="box">{addLeadingZero(timeLeft.days)}</h4>
                <span>Day</span>
              </div>
              <div className="deadline-container">
                <h4 className="box">{addLeadingZero(timeLeft.hours)}</h4>
                <span>Hrs</span>
              </div>
              <div className="deadline-container">
                <h4 className="box">{addLeadingZero(timeLeft.minutes)}</h4>
                <span>Min</span>
              </div>
              <div className="deadline-container">
                <h4 className="box">{addLeadingZero(timeLeft.seconds)}</h4>
                <span>Sec</span>
              </div>
            </div>
          )}
          
        </aside>
      </main>
    </div>
   
  );
};

export default CountdownCardKit;
