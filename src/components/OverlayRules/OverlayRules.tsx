import React from "react";

import Heading from "../Heading/Heading";
import {
  RulesWrapper,
  RulesList,
  RulesLine,
  RulesHeadingH2,
  RulesHeadingH3,
  ListNo,
} from "./OverlayRules.style";

import { theme } from "../../styles/Theme.style";
import OverlayRulesCheck from "../OverlayRulesCheck";

const OverlayRules = () => {
  return (
    <RulesWrapper>
      <RulesHeadingH2>
        <Heading size="M" color={theme.colors.black}>
          RULES
        </Heading>
      </RulesHeadingH2>
      <RulesHeadingH3>
        <Heading size="S" color={theme.colors.lightPurple}>
          OBJECTIVE
        </Heading>
      </RulesHeadingH3>
      <p>
        Be the first player to connect 4 of the same colored discs in a row
        (either vertically, horizontally, or diagonally).
      </p>
      <RulesHeadingH3>
        <Heading size="S" color={theme.colors.lightPurple}>
          HOW TO PLAY
        </Heading>
      </RulesHeadingH3>
      <RulesList>
        <RulesLine>
          {" "}
          <ListNo>1</ListNo> <p>Red goes first in the first game</p>
        </RulesLine>
        <RulesLine>
          {" "}
          <ListNo>2</ListNo>
          <p>
            Players must alternate turns, and only one disc can be dropped in
            each turn
          </p>
        </RulesLine>
        <RulesLine>
          <ListNo>3</ListNo>
          <p>The game ends when there is a 4-in-a-row or a stalemate.</p>
        </RulesLine>
        <RulesLine>
          <ListNo>4</ListNo>
          <p>The starter of the previous game goes second on the next game.</p>
        </RulesLine>
      </RulesList>
      <OverlayRulesCheck />
    </RulesWrapper>
  );
};

export default OverlayRules;
