import React from 'react';

import { useControle } from '../../../hooks/controle';
import OpcaoJogo from '../../OpcaoJogo';

import styles from './styles.module.css';

export default function Jokenpo() {
  const { executaJogo } = useControle();

  return (
    <>
      <h1 className={styles.nomeJogo}>Jokenpo</h1>

      <div className={styles.slotOpcoes}>
        <span>
          <OpcaoJogo
            label="Papel"
            icone={`\u270b`}
            valorJogo={0}
            showLabel={true}
          />
        </span>
        
        <span>
          <OpcaoJogo
            label="Tesoura"
            icone={`\u270c`}
            valorJogo={1}
            showLabel={true}
          />

          <OpcaoJogo
            label="Pedra"
            icone={`\u270a`}
            valorJogo={2}
            showLabel={true}
          />
        </span>
      </div>
    </>
  );
}