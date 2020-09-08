import React from "react";

function Timer(props) {
  const timerTime = props.timerTime;
  let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
  let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
  let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
  let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
  return (
    <div className="timerDisplay">
     {minutes > 0 ? `${minutes} :` : ""}{seconds} : {centiseconds}
    </div>
  );
}

export default Timer;
