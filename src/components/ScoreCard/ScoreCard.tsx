import React from "react";
import  Heading  from "../Heading/Heading";

import {ScoreCardH2, ScoreCardH3, ScoreCardStyle, ScoreCardWrapper } from "./ScoreCard.style";

import {ScoreCardEmoji} from "../index";

export interface PScoreCard {
  position: "left" | "right";
  player: string;
  score: number;
}

export const ScoreCard: React.FC<PScoreCard> = (props) => {
  const {position, player, score} = props;
      return (
        <ScoreCardStyle>
          <ScoreCardWrapper>
            <ScoreCardEmoji position={position}/>
            <ScoreCardH3>
              <Heading size="S">{player}</Heading>
            </ScoreCardH3>
            <ScoreCardH2>
              <Heading size="M">{score}</Heading>
            </ScoreCardH2>
          </ScoreCardWrapper>
        </ScoreCardStyle>
      );
};
