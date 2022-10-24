import React from "react";
import { WinnerWrapper, WinnerH1, WinnerH3 } from "./Winner.style";
import { theme } from "../../styles/Theme.style";
import Heading from "../Heading";
import Button from "../Button";

export interface IWinner {
  player: string;
}

const Winner: React.FC<IWinner> = (props) => {
  const { player } = props;

  return (
    <WinnerWrapper>
      <WinnerH3>{player}</WinnerH3>
      <WinnerH1>WINS</WinnerH1>
      <Button variant="plain" onClick={() => {}}>
        <Heading size="XS" color={theme.colors.white}>
          PLAY AGAIN
        </Heading>
      </Button>
    </WinnerWrapper>
  );
};

export default Winner;