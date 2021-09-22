import React from 'react';
import {Route} from 'react-router-dom';

import Inicio from './inicio';

export default function Rotas(){
  
  return(
    <>
    <Route exact path="/" component={Inicio}/>
    </>
  );
}