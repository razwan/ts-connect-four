import React from "react";
<<<<<<< HEAD
import PlayAgain from "../PlayAgain";
import { ScoreCardH3 } from "../ScoreCard/ScoreCard.style";
import { WinnerWrapper, WinnerH1 } from "./Winner.style";
=======
import { ScoreCardH3 } from "../ScoreCard/ScoreCard.style";
import { WinnerWrapper, WinnerH1, PlayAgainButton, PlayText } from "./Winner.style";

>>>>>>> cac4cd20eebf5b9289f9b826dad530fccb3bfac2
export interface IWinner {
  player: string;
}

const Winner: React.FC<IWinner> = (props) => {
  const { player } = props;

  return (
    <WinnerWrapper>
      <ScoreCardH3>{player}</ScoreCardH3>
      <WinnerH1>WINS</WinnerH1>
<<<<<<< HEAD
        <PlayAgain/>
=======
      <PlayAgainButton>
        <PlayText>PLAY AGAIN</PlayText>
      </PlayAgainButton>
>>>>>>> cac4cd20eebf5b9289f9b826dad530fccb3bfac2
    </WinnerWrapper>
  );
};

export default Winner;
