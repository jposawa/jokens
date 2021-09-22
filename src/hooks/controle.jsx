import React, {createContext, useContext} from 'react';

export const ControleContext = createContext();

export const ControleProvider = ({children}) => {
  const CONFIG = {};
  // const history = useHistory();

  const valoresExportados = {
    CONFIG,
  };

  return (
    <ControleContext.Provider value={valoresExportados}>
      {children}
    </ControleContext.Provider>
  );
}


export const useControl = () =>{
  const conteudo = useContext(ControleContext);

  if(!conteudo){
    console.log("Tem que estar dentro de um Provider");
  }

  return conteudo;

}