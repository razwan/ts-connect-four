import React from "react";
import { PlayAgainButton, PlayText } from "./PlayAgain.style";

export interface IPlay {
    playAgainHandler?: Function,
}

const PlayAgain: React.FC<IPlay> = (props) => {
    const playAgainHandler = props.playAgainHandler ?? (() => {});
    return (
    <PlayAgainButton onClick={ () => playAgainHandler()}>
      <PlayText>PLAY AGAIN</PlayText>
    </PlayAgainButton>
    )
}

export default PlayAgain;