import React, {useContext, useState} from 'react';

import AppContext from '../../AppContext';
import { theme } from "../../styles/Theme.style";
import { Disc } from "../index";

import {
    BlackLayer,
    BoardHole,
    BoardHoleWrapper,
    BoardPlayerPointerContainer,
    BoardPlayerPointerImg,
    Cell, 
    Column,
    LayerEmptyStyles,
    WhiteLayer,
    WhiteBoardHole,
} from "./Board.style"; 

import Player1Pointer  from "./assets/board-pointer-player-one.svg";
import Player2Pointer from "./assets/board-pointer-player-two.svg";

const Board: React.FC<React.PropsWithChildren> = ( props ) => {
    const context = useContext( AppContext );
    const { ended, setEnded, setWinner, setCurrentPlayer, resetTimer } = context;
    const game = context.currentGame!;
    const currentScore = context.playerVsPlayerScore;
    const pointer = game.currentPlayer === game.player1 ? Player1Pointer : Player2Pointer;
    const [ board, setBoard ] = useState( game.board );
    const [ pointerIndex, setPointerIndex ] = useState( 1 );
    let newScore: number[];

    return (
        <>
            <BoardPlayerPointerContainer>
                <BoardPlayerPointerImg src={ pointer } style={ { 
                    'gridColumn': `${ pointerIndex }`,
                    'opacity': `${ ended ? 0 : 1 }`
                } } />
            </BoardPlayerPointerContainer>

            <div style={{position: "relative"}}>
                <BlackLayer>
                {board.map((column, columnIndex) => {
                        return column.map( ( player, rowIndex ) => {
                            return (
                            <BoardHoleWrapper key={ `${ columnIndex }-${ rowIndex }` }>
                                <BoardHole></BoardHole>
                            </BoardHoleWrapper>
                            )
                        } );
                    })}
                </BlackLayer>
                <LayerEmptyStyles>
                    {
                        context.currentGame!.board.map( ( column, index ) => {
                            return (
                                <Column key={ `column-${ index }` } onMouseEnter={() => {
                                    setPointerIndex( index + 1 )
                                }} onClick={ () => { 
                                    try {
                                        game.insert( index );
                                        setBoard( game.board );
                                        setCurrentPlayer(game.currentPlayer);
                                        resetTimer();

                                        if ( game.ended ) {
                                            setEnded( true );

                                            if ( game.winner ) {
                                                setWinner( game.currentPlayer );
                                            }
                                        }

                                        if( game.winner !== undefined ) {
                                            if( game.player1 === game.winner) {
                                                newScore = currentScore;
                                                newScore[0] = newScore[0] + 1;
                                                context.setPlayerVsPlayerScore(newScore);
                                            } else {
                                                newScore = currentScore;
                                                newScore[1] = newScore[1] + 1;
                                                context.setPlayerVsPlayerScore(newScore);
                                            }

                                            localStorage.setItem('score',JSON.stringify(newScore));
                                        }

                                    } catch( error ) {
                                        console.log( error );
                                    }}}>
                                    { column.map( player => {
                                        if ( player === undefined ) {
                                            return <Cell />
                                        }

                                        return <Disc color={ player === game.player1 ? theme.colors.pink : theme.colors.yellow } />
                                    } ) }
                                </Column>
                            )
                        } )
                    }
                </LayerEmptyStyles>
                <WhiteLayer className="white-layer">
                    {board.map((column, columnIndex) => {
                        return column.map( ( player, rowIndex ) => {
                            return (
                                <BoardHoleWrapper key={ `${ columnIndex }-${ rowIndex }` }>
                                    <WhiteBoardHole></WhiteBoardHole>
                                </BoardHoleWrapper>
                            )
                        } );
                    })}
                </WhiteLayer>
            </div>
        </>
    );
}

export default Board;