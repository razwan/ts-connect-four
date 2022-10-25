import { useContext } from 'react';
import { FooterContentStyle, FooterStyle } from './FooterStyle.style';
import { Winner } from '../../components';
import AppContext from '../../AppContext';

const Footer = () => {
    const { winner, currentGame, newGameVSPlayer } = useContext( AppContext );
    const winnerIsPlayer1 = winner === currentGame!.player1;
    const winnerString = winnerIsPlayer1 ? currentGame!.player1 : currentGame!.player2;
    const className = `${ winner ? `has-winner has-winner--${ winnerString }` : '' }`;

    return (
        <FooterStyle className={ className }>
            <FooterContentStyle>
                { winner && <Winner player={ winner } onPlayAgainClick={ () => { 
                    newGameVSPlayer( currentGame!.player2, currentGame!.player1 );
                } } /> }
            </FooterContentStyle>
        </FooterStyle>
    )
}

export default Footer;
