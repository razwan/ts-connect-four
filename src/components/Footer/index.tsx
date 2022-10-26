import { useContext } from 'react';
import { FooterContentStyle, FooterStyle } from './FooterStyle.style';
import { Winner } from '../../components';
import AppContext from '../../AppContext';
import Timer from '../Timer';

const Footer = () => {
    const { ended, winner, currentGame, newGameVSPlayer, currentPlayer, player1 } = useContext( AppContext );
    const winnerIsPlayer1 = winner === player1;
    const winnerString = winnerIsPlayer1 ? 'player1' : 'player2';
    const className = `${ winner ? `has-winner has-winner--${ winnerString }` : '' }`;

    return (
        <FooterStyle className={ className }>
            <FooterContentStyle>
                { ended && <Winner player={ winner } onPlayAgainClick={ () => { 
                    newGameVSPlayer( currentGame!.player2, currentGame!.player1 );
                } } /> }
                { ! ended && <Timer player={ currentPlayer } /> }
            </FooterContentStyle>
        </FooterStyle>
    )
}

export default Footer;
