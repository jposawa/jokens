import React from 'react';
import {Link} from 'react-router-dom';

import styles from './styles.module.css';

export default function Inicio() {
  return (
    <>
    <div className={styles.apresentacao}>
      <h1>Jokens</h1>
      <p>Você acha que consegue ganhar de mim em jogos como Pedra-Papel-Tesoura (Jo Ken Po)?</p>
      <p>Escolha um dos jogos abaixo e vamos ver</p>
    </div>

    <div className={styles.slotModosJogo}>
      <Link to="jokenpo">JoKenPo</Link>
    </div>
    </>
  );
}