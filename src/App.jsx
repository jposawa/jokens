import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ControleProvider } from './hooks/controle';
import Rotas from './paginas/rotas';

import './App.css';

function App() {
  return (
    <ControleProvider>
      <Router>
        <main>
          <Rotas />
        </main>
      </Router>
    </ControleProvider>
  );
}

export default App;