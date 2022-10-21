import { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../../AppContext'; 
import { Header, Game, Footer, PauseMenu, ScoreCard, Disc } from '../../components';
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
          <Game>
            <Disc color={ '#FFCE67' } size={ 'L' } />
          </Game>
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

const Layer = styled.div`
position: relative;
grid-column: 1;
grid-row: 1;
`;

const Layers = styled.div`
display: grid;
`

const PauseMenuLayerStyle = styled( Layer )`
position: fixed;
tranform: translateZ(0);
display: flex;
justify-content: center;

&, &:before {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

&:before {
  content: "";
  position: absolute;
  background: ${ theme.colors.darkPurple };
  opacity: 0.5;
  z-index: -1;
}
`;

const PauseMenuLayer: React.FC<React.PropsWithChildren | null> = () => {
  const context = useContext( AppContext );
  const { showPauseMenu, setShowPauseMenu, newGameVSPlayer, setCurrentGame } = context;

  if ( ! showPauseMenu ) {
    return null;
  }
  
  return (
    <PauseMenuLayerStyle>
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
    </PauseMenuLayerStyle>
  )
}

const GameScreen: React.FC<React.PropsWithChildren> = () => {
  return (
    <Layers>
      <Layer>
        <GameView />
      </Layer>
      <PauseMenuLayer />
    </Layers>
  )
}

export default GameScreen;