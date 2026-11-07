import { useState, useEffect } from "react";
import { format } from 'date-fns';
import "./App.css";
// Inastore current date and time in state Like inakeep it isitu daganye
function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
// Use useEffect to update the current time every second nikutukeep rada kila time accuracy muhimu
  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
 // Cleanup the interval on component unmount to avoid memory leaks Isiendelee kucountinue running 
    return () => clearInterval(timerId);
  }, []);
    
  return (
    <div className="app-container">
      <header>
      <h1>Current Date and Time</h1>
      <p>Welcome to the Color Clock!</p>
      </header>
      <main className="clock-box">
        {/* Kutumia date-fns function kwa kuonyesha muda wa sasa */}
        <p className="time-display">
          {format(currentTime, 'PPpp')}
        </p>
      </main>
    </div>
  );
}

export default App;