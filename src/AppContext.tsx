import React, { createContext, PropsWithChildren, useCallback, useState } from 'react';
import ConnectFour from './components/ConnectFour';

type TAppContext = {
    showRules: boolean,
    setShowRules: Function,
    showPauseMenu: boolean,
    setShowPauseMenu: Function,
    currentGame?: ConnectFour<string>,
    setCurrentGame: Function,
    playerVsPlayerScore: [ number, number ],
    playerVsCPUScore: [ number, number ],
    winner?: string,
    setWinner: Function,
    ended: Boolean,
    setEnded: Function,
    newGameVSPlayer: Function,
    restartGame: Function,
    quitGame: Function,
}

type HOC = ( Component: any ) => React.FC<PropsWithChildren>

const AppContext = createContext( {} as TAppContext );

const withContextProvider: HOC = ( Component ) => {

    return ( props ) => {
        const [ showRules, setShowRules ] = useState( false );
        const [ showPauseMenu, setShowPauseMenu ] = useState( false );
        const [ winner, setWinner ] = useState();
        const [ ended, setEnded ] = useState( false );
        const [ currentGame, setCurrentGame ] = useState<ConnectFour<string> | undefined>();
        const newGameVSPlayer = useCallback( ( player1: string, player2: string ) => {
            setCurrentGame( new ConnectFour( player1, player2 ) );
            setWinner( undefined );
        }, [] );
        const quitGame = useCallback( () => {
            setCurrentGame( undefined );
        }, [] );
        const restartGame = useCallback( () => {
            setCurrentGame( new ConnectFour( currentGame!.player1, currentGame!.player2 ) );
        }, [] );

        const context: TAppContext = {
            showRules, 
            setShowRules,
            currentGame,
            setCurrentGame,
            showPauseMenu,
            setShowPauseMenu,
            newGameVSPlayer,
            playerVsPlayerScore: [ 0, 0 ],
            playerVsCPUScore: [ 0, 0 ],
            winner,
            setWinner,
            ended,
            setEnded,
            restartGame,
            quitGame,
        };

        return (
            <AppContext.Provider value={ context }>
                <Component />
            </AppContext.Provider>
        )
    }
}

export { withContextProvider }

export default AppContext;