import {useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Quiz.css'

const Countdown = () => {
    const [seconds, setSeconds] = useState(100);
    const url = useLocation();

    useEffect(() => {
      const countdown = setInterval(() => {
        if (seconds <= -100) {
          clearInterval(countdown);
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
  
      return () => clearInterval(countdown);
    }, [seconds]);
    return (
        <div className='countdown'>{seconds}</div>
    )
}

export default Countdown;