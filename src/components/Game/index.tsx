import React from 'react';
import { GameStyle } from './GameStyle.style';

const Game: React.FC<any> = ( props ) => {
    return (
        <GameStyle>{ props.children }</GameStyle>
    )
}
    
export default Game;
