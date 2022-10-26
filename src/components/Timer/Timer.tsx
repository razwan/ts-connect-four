import { TimerWrapper, TimerH3, TimerH1 } from "./Timer.style";
import rectangle1 from "./assets/Rectangle.svg";
import rectangle2 from "./assets/Rectangle2.svg";
import { theme } from "../../styles/Theme.style";
import { useContext } from "react";
import { useState, useEffect } from "react";
import AppContext from "../../AppContext";
export interface ITimer {
  player: string | undefined;
}

const Timer: React.FC<ITimer> = (props) => {
  const { player } = props;

  const { timer, setTimer } = useContext(AppContext);

  useEffect(() => {
    if (timer === 0) {
      return () => {};
    }

    const interval = setInterval(() => {
      setTimer((timeLeft: number) => {
        if (timeLeft - 1 === 0) {
          clearInterval(interval);
        }
        return timeLeft - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const isPlayer1 = player === "player1";
  const textColor = isPlayer1 ? theme.colors.white : theme.colors.black;

  return (
    <TimerWrapper>
      <img src={isPlayer1 ? rectangle1 : rectangle2} alt="timer rectangle" />
      <TimerH3 color={textColor}>{player}'S TURN</TimerH3>
      <TimerH1 color={textColor}>{timer}s</TimerH1>
    </TimerWrapper>
  );
};

export default Timer;
