import React, { useContext, useEffect } from "react";

import {
  ScoreCardScore,
  ScoreCardWrapper,
  PositionedScoreCardEmoji,
} from "./ScoreCard.style";

import { MediumHeading } from "../Heading/Heading.style";

import ScoreCardEmoji from "../ScoreCardEmoji/ScoreCardEmoji";
import AppContext from "../../AppContext";

export interface PScoreCard {
  position: "left" | "right";
  player: string;
  score: number;
}

const ScoreCard: React.FC<PScoreCard> = (props) => {
  const { position, player, score } = props;
  const context = useContext( AppContext );
  const game = context.currentGame!;

  useEffect(() => {
      // @ts-ignore
      const score = game.getItemFromLocalStorage('score');
      if(score !== null) {
          context.setPlayerVsPlayerScore(score);
      }
  }, [])

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
