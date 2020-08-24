import React from 'react';
import {Container} from './style/index';
import Header from './components/Header.jsx';
import './index.css'
import Navbar from './components/Navbar';
import Techs from './components/Techs';



function App() {
  return (
    <Container>
      <Navbar/>
      <Techs/>
    </Container>
  );
}


export default App;

