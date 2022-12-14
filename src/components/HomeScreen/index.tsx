import styled from 'styled-components';
import { useContext } from 'react';
import { OverlayRules, StartMenu } from '../../components';
import AppContext from '../../AppContext';

const HomeScreenView: React.FC<React.PropsWithChildren> = ( props ) => {
    const context = useContext( AppContext );
    const { showRules, setShowRules, newGameVSPlayer, player1, player2 } = context;
    
    if ( showRules ) {
        return <OverlayRules onClose={ () => { setShowRules( false ) } } />
    }

    return (
        <StartMenu 
            onRulesClick={ () => { setShowRules( true ) } } 
            onStart={ () => {
                newGameVSPlayer( player1, player2 );
            } } />
    )
}

const HomeScreenWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;

    > * {
        max-width: 480px;
    }
`

const HomeScreen: React.FC<React.PropsWithChildren> = ( props ) => {
    return (
        <HomeScreenWrapper>
            <HomeScreenView />
        </HomeScreenWrapper>
    )
}

export default HomeScreen;