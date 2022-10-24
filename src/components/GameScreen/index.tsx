import { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../../AppContext'; 
import { Board, Footer, Header, Modal, PauseMenu, ScoreCard } from '../../components';
import { theme } from '../../styles/Theme.style';

const GameView: React.FC<React.PropsWithChildren> = () => {
  const { setShowPauseMenu, newGameVSPlayer } = useContext( AppContext );

  return (
      <div className='layout'>
      <div className='layout__header'>
        <Header 
          onMenuClick={ () => { setShowPauseMenu( true ) } } 
          onRestartClick={ () => { newGameVSPlayer() } } />
      </div>
      <div className='layout__scorecard layout__scorecard-1'>
        <ScoreCard position={ 'left' } player={ 'player 1' } score={ 10 } />
      </div>
      <div className='layout__game'>
        <Board />
      </div>
      <div className='layout__scorecard layout__scorecard-2'>
        <ScoreCard position={ 'right' } player={ 'player 2' } score={ 1 } />
      </div>
      <div className='layout__footer'>
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