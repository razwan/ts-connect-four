import React from 'react';
import {
    BlackLayer,
    BoardHoleWrapper,
    BoardHole,
    WhiteLayer,
    WhiteBoardHole,
    BoardPlayerPointerImg,
    BoardPlayerPointerContainer,
    Cell, LayerEmptyStyles
} from "./Board.style";
import { Disc } from "../index";
import Player1Pointer  from "./assets/board-pointer-player-one.svg";
import Player2Pointer from "./assets/board-pointer-player-two.svg";
import {theme} from "../../styles/Theme.style";

export interface IBoard {
    player: 'player1' | 'player2',
    currentPointerIndex: number
}

const boardArray = [
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    2, 0, 0, 0, 0, 0, 0,
    1, 1, 0, 0, 0, 0, 0,
    1, 2, 2, 1, 0, 0, 0,
];

const playerTurnStartArray = [1,2,3,4,5,6,7];

const Board: React.FC<IBoard> = ({
    player = 'player1',
    currentPointerIndex,
}) => {
    const playerPointer = player === "player1" ? Player1Pointer : Player2Pointer;

    return (
        <>
            <BoardPlayerPointerContainer>
                {playerTurnStartArray.map((value, i) => {
                    if(currentPointerIndex === i) {
                        return (
                            <div style={{height: '10px', position: 'relative'}} key={i}>
                                <BoardPlayerPointerImg src={playerPointer} alt={playerPointer}/>
                            </div>
                        );
                    } else {
                        return (
                            <div style={{height: '10px', position: 'relative'}} key={i}></div>
                        );
                    }

                })}
            </BoardPlayerPointerContainer>

            <div style={{position: "relative"}}>
                <BlackLayer>
                    {boardArray.map((hole, index) => {
                        return (
                            <BoardHoleWrapper key={index}>
                                <BoardHole></BoardHole>
                            </BoardHoleWrapper>
                        )})}
                </BlackLayer>
                <LayerEmptyStyles>
                    {boardArray.map((hole, _) => {
                        if(hole === 0) {
                            return <Cell/>;
                        }

                        return <Disc color={ hole === 1 ? '#FD6687' : '#FFCE67' } />;
                    })}
                </LayerEmptyStyles>
                <WhiteLayer className="white-layer">
                    {boardArray.map((hole, index) => {
                        return (
                            <BoardHoleWrapper key={index}>
                                <WhiteBoardHole></WhiteBoardHole>
                            </BoardHoleWrapper>
                        );
                    })}
                </WhiteLayer>
            </div>
        </>
    );
}

export default Board;