import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Header, Board, Footer, ScoreCard, StartMenu, OverlayRules } from './components';
import { GlobalStyles } from './styles/GlobalStyles.style';
import { theme } from './styles/Theme.style';

const App = () => {
  const [ showRules, setShowRules ] = useState( false );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StartMenu onRulesClick={ () => { setShowRules( true ) } } />
      { showRules && <OverlayRules onClose={ () => { setShowRules( false ) } } /> }
      <div className='layout'>
        <div className='layout__header'>
          <Header />
        </div>
        <div className='layout__scorecard layout__scorecard-1'>
          <ScoreCard position={ 'left' } player={ 'player 1' } score={ 10 } />
        </div>
        <div className='layout__game'>
            <Board player={ 'player2' } currentPointerIndex={0}></Board>
        </div>
        <div className='layout__scorecard layout__scorecard-2'>
          <ScoreCard position={ 'right' } player={ 'player 2' } score={ 1 } />
        </div>
        <div className='layout__footer'>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
