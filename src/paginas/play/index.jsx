import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {Jokenpo} from '../../componentes/jogos';
import {useControle} from '../../hooks/controle';

import styles from './styles.module.css';

export default function Play() {
  const {nomeJogo} = useParams();
  const {placar, mensagem, setMensagem} = useControle();

  useEffect(()=>{
    if(mensagem && mensagem.trim() !== ""){
      setTimeout(()=>{
        setMensagem("");
      },3000);
    }
  },[mensagem]);
  
  return (
    <>
    <div className={styles.slotPlacar}>
      <p><b>Pontuação máxima:</b> {placar.pontuacaoMaxima}</p>
      <p>Pontuação atual: {placar.pontuacaoAtual}</p>
    </div>
    
    <div className={styles.slotJogo}>
    {
      {
        "jokenpo": <Jokenpo/>    
      }[nomeJogo] || <Jokenpo/>
    }
    </div>
    
    <div className={styles.slotMensagem}>
      {mensagem}
    </div>
    </>
  );
}