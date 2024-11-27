"use client";

import { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isTimerActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 500);
    }

    // Clean-up function to clear interval
    return () => clearInterval(interval);
  }, [isTimerActive]);

  // Handler to start and stop the timer
  const handleToggleTimer = () => setIsTimerActive(!isTimerActive);

  return (
    <div style={{ textAlign: "center", marginTop: "20px", background:"blue", padding:"2px", margin:"10px"}}>
      <h1>Simple Timer</h1>
      <p>Elapsed Time: {seconds} seconds</p>
      <button onClick={handleToggleTimer}>
        {isTimerActive ? "Stop Timer" : "Start Timer"}
      </button>
    </div>
  );
}
