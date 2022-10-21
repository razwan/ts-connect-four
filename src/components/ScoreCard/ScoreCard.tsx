import React from "react";
import Heading from "../Heading/Heading";

import {
  ScoreCardH2,
  ScoreCardH3,
  ScoreCardWrapper,
} from "./ScoreCard.style";

import ScoreCardEmoji from "../ScoreCardEmoji/ScoreCardEmoji";

export interface PScoreCard {
  position: "left" | "right";
  player: string;
  score: number;
}

const ScoreCard: React.FC<PScoreCard> = (props) => {
  const { position, player, score } = props;
  return (
      <ScoreCardWrapper>
        <ScoreCardEmoji position={position} />
        <ScoreCardH3 as="div">{ player }</ScoreCardH3>
        <ScoreCardH2 as="div">{ score }</ScoreCardH2>
      </ScoreCardWrapper>
  );
};

export default ScoreCard;
