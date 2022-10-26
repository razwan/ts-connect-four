import React from "react";

import {
  ScoreCardScore,
  ScoreCardWrapper,
  PositionedScoreCardEmoji,
} from "./ScoreCard.style";

import { MediumHeading } from "../Heading/Heading.style";

import ScoreCardEmoji from "../ScoreCardEmoji/ScoreCardEmoji";

export interface PScoreCard {
  position: "left" | "right";
  player: string;
  score: number;
}

const ScoreCard: React.FC<PScoreCard> = (props) => {
  const { position, player, score } = props;
  return (
      <ScoreCardWrapper position={position}>
        <PositionedScoreCardEmoji position={position}>
          <ScoreCardEmoji position={position} />
        </PositionedScoreCardEmoji>
        <ScoreCardScore as="div">{ player }</ScoreCardScore>
        <MediumHeading as="div">{ score }</MediumHeading> 
      </ScoreCardWrapper>
  );
};

export default ScoreCard;
