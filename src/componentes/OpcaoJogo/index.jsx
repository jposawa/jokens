import React from 'react';

import {useControle} from '../../hooks/controle';

import styles from './styles.module.css';

export default function OpcaoJogo(props) {
  const {
    icone,
    label,
    className,
    style,
    valorJogo,
    showLabel,
  } = props;
  const {executaJogo} = useControle();

  return (
    <>
      <button className={`${styles.opcaoJogo} ${className}`} style={style} title={showLabel ? undefined : label} onClick={()=>{
        const _valorJogo = valorJogo ? valorJogo : 0;
        executaJogo(_valorJogo);
        }}>
        
        {icone && (
          <span>{icone}</span>
        )}

        {label && showLabel && (
          <span>{label}</span>
        )}
      </button>
    </>
  );
}