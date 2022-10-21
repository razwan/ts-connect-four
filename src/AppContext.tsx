import React, { createContext, PropsWithChildren, useState } from 'react';
import ConnectFour from './components/ConnectFour';

type TAppContext = {
    showRules: boolean,
    setShowRules: Function
    currentGame?: ConnectFour<string>,
    setCurrentGame: Function
}

type HOC = ( Component: any ) => React.FC<PropsWithChildren>

const AppContext = createContext( {} as TAppContext );

const withContextProvider: HOC = ( Component ) => {

    return ( props ) => {

        const [ showRules, setShowRules ] = useState( false );
        const [ currentGame, setCurrentGame ] = useState();

        const context: TAppContext = {
            showRules, 
            setShowRules,
            currentGame,
            setCurrentGame
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