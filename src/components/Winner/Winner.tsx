import React from "react";
import { ScoreCardH3 } from "../ScoreCard/ScoreCard.style";
import { WinnerWrapper, WinnerH1, PlayAgainButton, PlayText } from "./Winner.style";

export interface IWinner {
  player: string;
}

const Winner: React.FC<IWinner> = (props) => {
  const { player } = props;

  return (
    <WinnerWrapper>
      <ScoreCardH3>{player}</ScoreCardH3>
      <WinnerH1>WINS</WinnerH1>
      <PlayAgainButton>
        <PlayText>PLAY AGAIN</PlayText>
      </PlayAgainButton>
    </WinnerWrapper>
  );
};

export default Winner;
