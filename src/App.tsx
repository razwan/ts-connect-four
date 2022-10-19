import React from 'react';
import { Header, Game, Footer } from './components';
import { GlobalStyles } from './styles/GlobalStyles.style';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Game />
      <Footer />
    </>
  );
}

export default App;
