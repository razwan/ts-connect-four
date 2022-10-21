import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Header, Game, Footer, ScoreCard, Disc } from './components';
import { GlobalStyles } from './styles/GlobalStyles.style';
import { theme } from './styles/Theme.style';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <ScoreCard position={"left"} player={"player 1"} score={10} />
        <Game>
          <Disc color={"#FFCE67"} size={"L"} />
        </Game>
        <ScoreCard position={"right"} player={"player 2"} score={1} />
        <Footer />
    </ThemeProvider>
  );
}

export default App;
