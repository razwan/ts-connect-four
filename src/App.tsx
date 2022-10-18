import React from 'react';
import Heading from './components/Header';
import { GlobalStyles } from './styles/GlobalStyles.style';


function App() {
  return (
    <>
      <GlobalStyles />
      <Heading color='hotpink' size='L'>Please remove me</Heading>
    </>
  );
}

export default App;
