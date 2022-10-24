import React from "react";
import { TimerWrapper, TimerH3, TimerH1, TimerRectangle } from "./Timer.style";
import rectangle1 from "./assets/Rectangle.svg";
import rectangle2 from "./assets/Rectangle2.svg";

import { useState, useEffect } from "react";

export interface ITimer {
  player: string;
  time: number;
}

const Timer: React.FC<ITimer> = (props) => {
  const { player } = props;

  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {

    if (timeLeft === 0){ return }
    const interval = setInterval(() => {
      setTimeLeft(() => timeLeft - 1);
    }, 1000);
    return () => clearInterval(interval);
  },[timeLeft]);

  return (
    <TimerWrapper>
      <TimerRectangle src={player === "PLAYER 1" ? rectangle1 : rectangle2}/>
      <TimerH3>{player}'S TURN</TimerH3>
      <TimerH1>{timeLeft}s</TimerH1>
    </TimerWrapper>
  );
};

export default Timer;
