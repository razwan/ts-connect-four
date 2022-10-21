import React from "react";
import PlayAgain from "../PlayAgain";
import { ScoreCardH3 } from "../ScoreCard/ScoreCard.style";
import { WinnerWrapper, WinnerH1 } from "./Winner.style";

export interface IWinner {
  player: string;
}

const Winner: React.FC<IWinner> = (props) => {
  const { player } = props;

  return (
    <WinnerWrapper>
      <ScoreCardH3>{player}</ScoreCardH3>
      <WinnerH1>WINS</WinnerH1>
      <PlayAgain/>
    </WinnerWrapper>
  );
};

export default Winner;
