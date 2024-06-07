import React, { useState, useEffect, useRef } from "react";
import InputField from "./InputField";
import applause from '../assets/aplause.wav';



function Timer({ isOverlay }) {
  const [isEditing, setIsEditing] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  
  const intervalRef = useRef(null);

  // Helper function to handle countdown logic
  const updateTimer = () => {
    setSeconds((prevSeconds) => {
      if (prevSeconds > 0) return prevSeconds - 1;

      if (minutes > 0) {
        setMinutes((prevMinutes) => prevMinutes - 1);
        return 59;
      }

      if (hours > 0) {
        setHours((prevHours) => prevHours - 1);
        setMinutes(59);
        return 59;
      }

      clearInterval(intervalRef.current);
      setIsActive(false);
      return 0;
    });
  };

  // Start timer function
  const startTimer = () => {
    setIsActive(true);
    intervalRef.current = setInterval(updateTimer, 1000);
  };

  // Reset timer function
  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
    
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  // Pause timer function
  const pauseTimer = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
  };

  // Clear interval on component unmount
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  // Validate input
  const validateInput = (value) => {
    return isNaN(value) || value === '' ? 0 : parseInt(value);
  };

  // Play sound when timer is finished
  const playSound = () => {
    const audio = new Audio(applause);
    
        console.log('isOverlay', isOverlay)
    // if isEditing is true, then don't play sound
      audio.play();
    
  }

  // If timer is 00:00:00 which means it finish countdown, and is not reset then alert the user
  useEffect(() => {
    if (hours === 0 && minutes === 0 && seconds === 0) {
      
      if (!isEditing){
        playSound();
      }
      
      
    
  }
    
  
  }, [hours, minutes, seconds])

  return (
    <div className="flex flex-col align-center justify-center">
      {isEditing ? (
        <>
        <div className="flex text-3xl justify-center mx-2">
          <InputField
            label="H"
            value={hours}
            onChange={(e) => setHours(validateInput(e.target.value))}
            type="number"
            placeholder="0"
          />
          <InputField
            label="M"
            value={minutes}
            onChange={(e) => setMinutes(validateInput(e.target.value))}
            type="number"
            placeholder="0"
          />
          <InputField
            label="S"
            value={seconds}
            onChange={(e) => setSeconds(validateInput(e.target.value))}
            type="number"
            placeholder="0"
          />
        </div>
        <div className="flex justify-center">
        <button
            onClick={() => setIsEditing(false)}
            className="bg-blue-500 w-1/2 text-white px-4 rounded text-xl mt-12"
          >
            &#10004;
          </button>
        </div>
         
          <div>

         
        </div>
        </>
      ) : (
        <div className={`flex flex-col justify-center mt-4`}>
          <h1 className="text-4xl font-extrabold text-white px-4 py-2 rounded-lg">
            {hours.toString().padStart(2, "0")} : {minutes.toString().padStart(2, "0")} : {seconds.toString().padStart(2, "0")}
          </h1>
          {isActive ? (
            <div className={isOverlay ? '': 'hidden'}>
              <button
                className="bg-blue-700 text-white px-4 py-1 rounded text-xl mt-2 mx-2"
                onClick={pauseTimer}
              >
                &#10074;&#10074;
              </button>
              <button
                className="bg-red-700 text-white px-4 py-1 rounded text-2xl mt-2 mx-2"
                onClick={resetTimer}
              >
                &#8634;
              </button>
            </div>
          ) : (
            <div className={isOverlay === false ? 'mb-4 flex justify-center':'hidden'}>
              <button
                className="bg-blue-700 text-white px-4 py-1 rounded text-xl mt-2 mx-2"
                onClick={startTimer}
              >
                &#9658;
              </button>
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-500 text-white px-4 py-1 rounded text-xl mt-2 mx-2"
              >
                &#9998;
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Timer;
