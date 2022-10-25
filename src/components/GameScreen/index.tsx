import { useContext } from 'react';
import AppContext from '../../AppContext'; 
import { Board, Footer, Header, Modal, PauseMenu, ScoreCard, Winner } from '../../components';

const GameView: React.FC<React.PropsWithChildren> = () => {
  const { setShowPauseMenu, newGameVSPlayer, playerVsPlayerScore, winner } = useContext( AppContext );

  return (
      <div className='layout'>
      <div className='layout__header'>
        <Header 
          onMenuClick={ () => { setShowPauseMenu( true ) } } 
          onRestartClick={ () => { newGameVSPlayer() } } />
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
        { winner && <Winner player={ winner } /> }
        <Footer />
      </div>
    </div>
  )
}

const PauseMenuLayer: React.FC<React.PropsWithChildren | null> = () => {
  const context = useContext( AppContext );
  const { showPauseMenu, setShowPauseMenu, newGameVSPlayer, setCurrentGame } = context;

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
          setCurrentGame();
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