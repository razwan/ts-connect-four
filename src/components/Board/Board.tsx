import React, { useCallback, useContext, useState } from 'react';
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components';

import AppContext from '../../AppContext';
import {
    BlackLayerStyle,
    BoardHoleWrapper,
    BoardHole,
    WhiteLayerStyle,
    WhiteBoardHole,
    BoardPlayerPointerImg,
    BoardPlayerPointerContainer,
    LayerEmptyStyles,
    ColumnStyle
} from "./Board.style"; 
import { Disc } from "../index";
import Player1Pointer  from "./assets/board-pointer-player-one.svg";
import Player2Pointer from "./assets/board-pointer-player-two.svg";
import {theme} from "../../styles/Theme.style";

const InsertedDisc = styled.div`
    position: absolute;
    top: 0;
    left: 0; 
    translate: 0% -100%;
    width: 100%;
`;

type TAnimationOrDisc = {
    emptyCells: number,
    game: any,
    whenDone: Function,
    on: boolean,
}

const AnimationOrDisc: React.FC<TAnimationOrDisc> = ( props ) => {
    const { game, emptyCells, on, whenDone } = props;
    
    const styles = useSpring({
        from: { top: '0%' },
        to: { top: on ? '100%' : '0%' },
        onRest: () => {
            whenDone();
        }
    });

    if ( ! emptyCells ) {
        return <></>;
    }

    return (
        <animated.div style={{ position: 'relative', gridRow: `span ${ emptyCells }`, ...styles }}>
            <InsertedDisc>
                <Disc color={ game.currentPlayer === game.player1 ? theme.colors.pink : theme.colors.yellow } />
            </InsertedDisc>
        </animated.div> 
    )
}

const Board: React.FC<React.PropsWithChildren> = ( props ) => {
    const context = useContext( AppContext );
    const game = context.currentGame!;
    const pointer = game.currentPlayer === game.player1 ? Player1Pointer : Player2Pointer;
    const [ board, setBoard ] = useState( game.board );
    const [ pointerIndex, setPointerIndex ] = useState( 1 );

    const onColumnClick = useCallback( ( index: number ) => {
        try {
            game.insert( index );
            setBoard( game.board );
        } catch( error ) {
            console.log( error );
        }
    }, [] )

    return (
        <>
            <BoardPlayerPointerContainer>
                <BoardPlayerPointerImg src={ pointer } style={ { gridColumn: `${ pointerIndex }` } } />
            </BoardPlayerPointerContainer>

            <div style={ { position: "relative" } }>
                <BlackLayer board={ board } />
                <LayerEmptyStyles>
                    {
                        game.board.map( ( column, index ) => (
                            <Column 
                                game={ game }
                                column={ column } 
                                index={ index } 
                                onMouseEnter={ () => { setPointerIndex( index + 1 ) } } 
                                onClick={ () => {
                                    onColumnClick( index );
                                } }
                                showAnimation={ pointerIndex - 1 === index }
                            />
                        ) )
                    }
                </LayerEmptyStyles>
                <WhiteLayer board={ board } />
            </div>
        </>
    );
}

type TColumn = {
    column: any[],
    index: number,
    onMouseEnter?: Function,
    onClick?: Function,
    showAnimation?: boolean,
    game: any,
}

const Column: React.FC<TColumn> = ( props ) => {
    const { column, index, showAnimation, game } = props;
    const onMouseEnter = props.onMouseEnter ?? (() => {});
    const onClick = props.onClick ?? (() => {});
    const filledCells = column.filter( player => player !== undefined );
    const emptyCells = 6 - filledCells.length;
    const [ on, trigger ] = useState( false );

    return (
        <ColumnStyle onMouseEnter={ () => { onMouseEnter() } } onClick={ () => { 
            onClick();
            trigger( true );
        } }>
            { showAnimation && <AnimationOrDisc on={ on } whenDone={ () => {
                trigger( false );
            } } game={ game } emptyCells={ emptyCells } /> }
            { filledCells.map( player => {
                return <Disc color={ player === game.player1 ? theme.colors.pink : theme.colors.yellow } />
            } ) }
        </ColumnStyle>
    )
}

type PLayer = {
    board: any[][]
}

const WhiteLayer: React.FC<PLayer> = ( props ) => {
    const { board } = props;
    
    return (
        <WhiteLayerStyle className="white-layer">
            {board.map((column, columnIndex) => {
                return column.map( ( player, rowIndex ) => {
                    return (
                        <BoardHoleWrapper key={ `${ columnIndex }-${ rowIndex }` }>
                            <WhiteBoardHole></WhiteBoardHole>
                        </BoardHoleWrapper>
                    )
                } );
            })}
        </WhiteLayerStyle>
    )
}

const BlackLayer: React.FC<PLayer> = ( props ) => {
    const { board } = props;

    return (
        <BlackLayerStyle>
            {board.map((column, columnIndex) => {
                return column.map( ( player, rowIndex ) => {
                    return (
                    <BoardHoleWrapper key={ `${ columnIndex }-${ rowIndex }` }>
                        <BoardHole></BoardHole>
                    </BoardHoleWrapper>
                    )
                } );
            })}
        </BlackLayerStyle>
    )
}

export default Board;