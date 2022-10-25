import React from "react";
import { WinnerWrapper, WinnerH1, WinnerH3 } from "./Winner.style";
import { theme } from "../../styles/Theme.style";
import Heading from "../Heading";
import Button from "../Button";

export interface IWinner {
  player?: string;
  onPlayAgainClick?: Function
}

const Winner: React.FC<IWinner> = (props) => {
  const { player } = props;
  const onPlayAgainClick = props.onPlayAgainClick ?? (() => {});

  return (
    <WinnerWrapper>
      <WinnerH3>{ player ? player : 'Game Over' }</WinnerH3>
      <WinnerH1>{ player ? 'Wins' : 'Draw' }</WinnerH1>
      <Button variant="plain" onClick={ () => { onPlayAgainClick() } }>
        <Heading size="XS" color={theme.colors.white}>
          PLAY AGAIN
        </Heading>
      </Button>
    </WinnerWrapper>
  );
};

export default Winner;
