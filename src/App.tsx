import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles.style';
import { theme } from './styles/Theme.style';

import AppContext,{ withContextProvider } from './AppContext';
import { GameScreen, HomeScreen } from './components';

const CurrentScreen: React.FC<React.PropsWithChildren> = ( props ) => {
  const context = useContext( AppContext );
  const { currentGame } = context;

  if ( ! currentGame ) {
    return <HomeScreen />
  }

  return <GameScreen />
}

const App = withContextProvider(() => {

  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyles />
      <CurrentScreen />
    </ThemeProvider>
  );
} )

export default App;
