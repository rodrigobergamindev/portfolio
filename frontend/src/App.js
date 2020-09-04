import React from 'react';
import {Container} from './style/index';
import Header from './components/Header';
import './index.css'
import Portfolio from './components/Portfolio'


function App() {
  return (
      <Container>
        <Header/>
        <Portfolio/>
      </Container>

  );
}


export default App;

