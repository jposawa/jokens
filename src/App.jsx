import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {HomeOutlined} from '@ant-design/icons';

import { ControleProvider } from './hooks/controle';
import Rotas from './paginas/rotas';

import styles from './styles.module.css';

function App() {
  return (
    <Router>
      <ControleProvider>
        <div className={styles.slotPagina}>
          <nav className={styles.navegacao}>
            <Link className={styles.itemNavegacao} to="/">
              <HomeOutlined/>
              <p>Início</p>
            </Link>
          </nav>

          <div className={styles.frameJogo}>
              <Rotas />
          </div>
        </div>
      </ControleProvider>
    </Router>
  );
}

export default App;