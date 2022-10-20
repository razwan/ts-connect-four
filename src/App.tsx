import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Header, Game, Footer, ScoreCard, Disc } from './components';
import { GlobalStyles } from './styles/GlobalStyles.style';
import { theme } from './styles/Theme.style';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className='layout'>
        <div className='layout__header'>
          <Header />
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
    </ThemeProvider>
  );
}

export default App;
