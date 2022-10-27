import React, { Fragment, useCallback, useContext, useEffect, useMemo, useState } from 'react';

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
    const { ended, setCurrentPlayer, resetTimer, endGame, player1 } = context;
    const [ pointerIndex, setPointerIndex ] = useState( 1 );

    const game = useMemo( () => context.currentGame!, [ context.currentGame ] )
    const board = useMemo( () => game.board, [ game.board ] );
    const pointer = useMemo( () => game.currentPlayer === player1 ? Player1Pointer : Player2Pointer, [ game.currentPlayer ] );
    const [ winning, setWinning ] = useState<Array<[number, number]>>( [] );

    useEffect(() => {
        setWinning( [] );
    }, [ game ] )

    const insertAtIndex = useCallback( ( index: number ) => {
        try {
            game.insert( index );
            setCurrentPlayer(game.currentPlayer);
            resetTimer();
            
            if ( game.ended ) {
                endGame( game.winner );

                if ( game.connected ) {
                    setWinning( game.connected );
                }
            }
        } catch( error ) {
            console.log( error );
        }
    }, [ game ] )

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
                    { board.map((column, columnIndex) => {
                        return (
                            <Fragment key={ `${ columnIndex }` }>
                                { column.map( ( player, rowIndex ) => {
                                    return (
                                        <BoardHoleWrapper key={ `${ columnIndex }-${ rowIndex }` }>
                                            <BoardHole></BoardHole>
                                        </BoardHoleWrapper>
                                    )
                                } ) }
                            </Fragment>
                        ) 
                    } ) }
                </BlackLayer>
                <LayerEmptyStyles>
                    {
                        context.currentGame!.board.map( ( column, columnIndex ) => {
                            return (
                                <Column key={ `column-${ columnIndex }` } onMouseEnter={() => {
                                    setPointerIndex( columnIndex + 1 )
                                }} onClick={ () => { insertAtIndex( columnIndex ) } }>

                                    { column.map( ( player, rowIndex ) => {
                                        if ( player === undefined ) {
                                            return <Cell key={ `${ columnIndex }-${ rowIndex }` } />
                                        }

                                        return <Disc 
                                            key={ `${ columnIndex }-${ rowIndex }` }
                                            color={ player === player1 ? theme.colors.pink : theme.colors.yellow } 
                                            winner={ winning.findIndex( winningDisc => {
                                                return winningDisc[0] === columnIndex && winningDisc[1] === 5 - rowIndex
                                            } ) > -1 }
                                        />
                                    } ) }
                                </Column>
                            )
                        } )
                    }
                </LayerEmptyStyles>
                <WhiteLayer className="white-layer">
                    {board.map((column, columnIndex) => {
                        return (
                            <Fragment key={ `${ columnIndex }` }>
                                { column.map( ( player, rowIndex ) => {
                                    return (
                                        <BoardHoleWrapper key={ `${ columnIndex }-${ rowIndex }` }>
                                            <WhiteBoardHole></WhiteBoardHole>
                                        </BoardHoleWrapper>
                                    )
                                } ) }
                            </Fragment>
                        )
                    })}
                </WhiteLayer>
            </div>
        </>
    );
}

export default Board;