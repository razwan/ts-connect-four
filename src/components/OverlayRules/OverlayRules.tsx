import React from "react";

import {
  RulesWrapper,
  RulesHeadingH2,
  RulesHeadingH3,
  OverlayRulesCheckWrapper
} from "./OverlayRules.style";

import { theme } from "../../styles/Theme.style";
import OverlayRulesCheck from "../OverlayRulesCheck/OverlayRulesCheck";

const OverlayRules = () => {
  return (
    <RulesWrapper>
      <RulesHeadingH2>RULES</RulesHeadingH2>
      <RulesHeadingH3 color={theme.colors.lightPurple}>OBJECTIVE</RulesHeadingH3>
      <p>
        Be the first player to connect 4 of the same colored discs in a row
        (either vertically, horizontally, or diagonally).
      </p>
      <RulesHeadingH3 color={theme.colors.lightPurple}>HOW TO PLAY</RulesHeadingH3>
      <ol>
        <li><p>Red goes first in the first game</p></li>
        <li><p>
            Players must alternate turns, and only one disc can be dropped in
            each turn
          </p></li>
        <li><p>The game ends when there is a 4-in-a-row or a stalemate.</p></li>
        <li><p>The starter of the previous game goes second on the next game.</p></li>
      </ol>
      <OverlayRulesCheckWrapper>
        <OverlayRulesCheck />
      </OverlayRulesCheckWrapper>
    </RulesWrapper>
  );
};

export default OverlayRules;
