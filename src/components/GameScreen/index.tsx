import { useContext } from 'react';
import AppContext from '../../AppContext'; 
import { Board, Footer, Header, Modal, PauseMenu, ScoreCard } from '../../components';

const GameView: React.FC<React.PropsWithChildren> = () => {
  const { currentGame, setShowPauseMenu, newGameVSPlayer, playerVsPlayerScore } = useContext( AppContext );

  return (
      <div className='layout'>
      <div className='layout__header'>
        <Header 
          onMenuClick={ () => { setShowPauseMenu( true ) } } 
          onRestartClick={ () => { newGameVSPlayer( currentGame!.player1, currentGame!.player2 ) } } />
      </div>
      <div className='layout__scorecard layout__scorecard-1'>
        <ScoreCard position={ 'left' } player={ 'player 1' } score={ playerVsPlayerScore[0] } />
      </div>
      <div className='layout__game'>
        <Board />
      </div>
      <div className='layout__scorecard layout__scorecard-2'>
        <ScoreCard position={ 'right' } player={ 'player 2' } score={ playerVsPlayerScore[1] } />
      </div>
      <div className='layout__footer'>
        <Footer />
      </div>
    </div>
  )
}

const PauseMenuLayer: React.FC<React.PropsWithChildren | null> = () => {
  const context = useContext( AppContext );
  const { showPauseMenu, setShowPauseMenu, newGameVSPlayer, quitGame } = context;

  if ( ! showPauseMenu ) {
    return null;
  }
  
  return (
    <Modal>
      <PauseMenu 
        onContinue={ () => { setShowPauseMenu( false ) } } 
        onRestart={ () => { 
          newGameVSPlayer();
          setShowPauseMenu( false );
         } }
        onQuit={ () => { 
          quitGame();
          setShowPauseMenu( false );
         }}
      />
    </Modal>
  )
}

const GameScreen: React.FC<React.PropsWithChildren> = () => {
  return (
    <>
      <GameView />
      <PauseMenuLayer />
    </>
  )
}

export default GameScreen;