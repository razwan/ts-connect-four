import React from 'react';
import {
    BlackLayer,
    BoardHoleWrapper,
    BoardHole,
    WhiteLayer,
    WhiteBoardHole,
    BoardPlayerPointerImg,
    BoardPlayerPointerContainer
} from "./Board.style";
import { Disc } from "../index";
import Player1Pointer  from "./assets/board-pointer-player-one.svg";
import Player2Pointer from "./assets/board-pointer-player-two.svg";

export interface IBoard {
    player: 'player1' | 'player2',
    currentPointerIndex: number
}

const boardArray = [
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
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
                <WhiteLayer className="white-layer">
                    {boardArray.map((hole, index) => {
                        return (
                            <BoardHoleWrapper key={index}>
                                <WhiteBoardHole></WhiteBoardHole>
                            </BoardHoleWrapper>
                        )})}
                </WhiteLayer>
            </div>

            <Disc color={ '#FFCE67' } size={ 'L' } />
        </>
    );
}

export default Board;