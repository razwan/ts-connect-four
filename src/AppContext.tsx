import React, { createContext, PropsWithChildren, useCallback, useState } from 'react';
import ConnectFour from './components/ConnectFour';

type TAppContext = {
    showRules: boolean,
    setShowRules: Function,
    showPauseMenu: boolean,
    setShowPauseMenu: Function,
    currentGame?: ConnectFour<string>,
    setCurrentGame: Function,
    newGameVSPlayer: Function,
    playerVsPlayerScore: [ number, number ],
    playerVsCPUScore: [ number, number ]
}

type HOC = ( Component: any ) => React.FC<PropsWithChildren>

const AppContext = createContext( {} as TAppContext );

const withContextProvider: HOC = ( Component ) => {

    return ( props ) => {
        const [ showRules, setShowRules ] = useState( false );
        const [ showPauseMenu, setShowPauseMenu ] = useState( false );
        const [ currentGame, setCurrentGame ] = useState<ConnectFour<string> | undefined>();
        const newGameVSPlayer = useCallback( () => {
            setCurrentGame( new ConnectFour( 'player1', 'player2' ) )
        }, [] )

        const context: TAppContext = {
            showRules, 
            setShowRules,
            currentGame,
            setCurrentGame,
            showPauseMenu,
            setShowPauseMenu,
            newGameVSPlayer,
            playerVsPlayerScore: [ 0, 0 ],
            playerVsCPUScore: [ 0, 0 ]
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