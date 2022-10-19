import React from "react";

import { LeftScoreCard, LeftScoreCardWrapper, ScoreCardH2, ScoreCardH3, RightScoreCardWrapper, RightScoreCard } from "./ScoreCard.style";

export interface PScoreCard {
  position: "left" | "right";
}

export const ScoreCard: React.FC<PScoreCard> = ({ position }) => {
  switch (position) {
    case "left":
      return (
        <LeftScoreCard>
          <LeftScoreCardWrapper>
            <ScoreCardH3>Player 1</ScoreCardH3>
            <ScoreCardH2>12</ScoreCardH2>
          </LeftScoreCardWrapper>
        </LeftScoreCard>
      );
    case "right":
      return (
        <RightScoreCard>
          <RightScoreCardWrapper>
            <ScoreCardH3>Player 2</ScoreCardH3>
            <ScoreCardH2>23</ScoreCardH2>
          </RightScoreCardWrapper>
        </RightScoreCard>
      );
  }
};
