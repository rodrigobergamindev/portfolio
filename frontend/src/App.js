import React from 'react';
import {Container} from './style/index';
import Header from './components/Header.jsx';
import './index.css'
import Navbar from './components/Navbar';

function App() {
  return (
    <Container>
      <Navbar/>
      <Header/>
    </Container>
  );
}


export default App;

