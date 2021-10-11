import React from 'react';

import {useControle} from '../../../hooks/controle';

import styles from './styles.module.css';

export default function Jokenpo() {
  const {executaJogo} = useControle();

  return (
    <>
      <h1 className={styles.nomeJogo}>Jokenpo</h1>
      
      <button className={styles.alternativaJogo} onClick={()=>{executaJogo(0)}}>
        Papel &#x270b;
      </button>
      
      <button className={styles.alternativaJogo} onClick={()=>{executaJogo(1)}}>
        Tesoura &#x270c;
      </button>
      
      <button className={styles.alternativaJogo} onClick={()=>{executaJogo(2)}}>
        Pedra &#x270a;
      </button>
    </>
  );
}