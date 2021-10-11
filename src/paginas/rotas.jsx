import React from 'react';
import {Route} from 'react-router-dom';

import Inicio from './inicio';
import Play from './play';

export default function Rotas(){
  
  return(
    <>
    <Route exact path="/" component={Inicio}/>
    
    <Route exact path="/:nomeJogo" component={Play}/>
    </>
  );
}