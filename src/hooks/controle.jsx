import React, {createContext, useContext, useState, useEffect} from 'react';

export const ControleContext = createContext();

export const ControleProvider = ({children}) => {
  const CONFIG = {
    PREFIXO_LS: "jokens@",
    JOGADAS:{
      JOKENPO:["Papel","Tesoura","Pedra"],
    },
  };
  const [nomeJogo, setNomeJogo] = useState("JOKENPO");
  const [placar, setPlacar] = useState({
    pontuacaoAtual:undefined,
    pontuacaoMaxima:undefined,
  });
  const [mensagem, setMensagem] = useState();

  const mudaNomeJogo = (nome) =>{
    try{
      _nomeJogo = nome ? nome.toUpperCase() : "JOKENPO";

      setNomeJogo(_nomeJogo);
    }
    catch(erro){
      console.warn(`Erro na mudança de nome do jogo: ${erro}`);
    }
  }

  const recuperarPontuacaoMaximaLS = () =>{
    const _placar = {...placar};
    const {PREFIXO_LS} = CONFIG;
    const _pontuacaoMaximaLS = localStorage[`${PREFIXO_LS}pontuacaoMaxima`];
    
    return _pontuacaoMaximaLS && _pontuacaoMaximaLS > 0 ? _pontuacaoMaximaLS : 0;
  }

  const atualizarPlacar = (novaPontuacao) =>{
    const _placar = {...placar};
    const {PREFIXO_LS} = CONFIG;
    const _pontuacaoMaximaLS = recuperarPontuacaoMaximaLS();
    novaPontuacao = novaPontuacao && novaPontuacao > 0 ? novaPontuacao : 0;
    
    _placar.pontuacaoAtual = novaPontuacao;
    _placar.pontuacaoMaxima = novaPontuacao > _pontuacaoMaximaLS ? novaPontuacao : _pontuacaoMaximaLS;

    localStorage[`${PREFIXO_LS}pontuacaoMaxima`] = _placar.pontuacaoMaxima;
    setPlacar(_placar);
  }

  const jogadaComputador = (numeroMaximoPossivel) =>{
    numeroMaximoPossivel = numeroMaximoPossivel && numeroMaximoPossivel > 2 ? numeroMaximoPossivel : 3;

    return Math.floor((Math.random() * numeroMaximoPossivel));
  }

  const comparaResultados = (resultados) =>{
    try{
      resultados.sort((a,b) => {
        a = parseInt(a);
        b = parseInt(b);

        return a-b;
      });

      if(parseInt(resultados[0]) === parseInt(resultados[1])){
        return "Empate";
      }

      if(parseInt(resultados[0]) === 0 && (parseInt(resultados[1])+1) === CONFIG.JOGADAS[nomeJogo].length){
        return resultados[0].split('|')[1];
      }

      return resultados[1].split('|')[1];
    }
    catch(erro){
      console.warn(`Deu erro ${erro}`);
    }
  }

  const executaJogo = (numeroJogador) =>{
    try{
      const resultados = [];
      const totalPossibilidades = CONFIG.JOGADAS[nomeJogo].length;
      let vencedor;
      let _mensagem;
      let {pontuacaoAtual} = placar;

      resultados.push(`${numeroJogador}|Jogador`);
      resultados.push(`${jogadaComputador(totalPossibilidades)}|Computador`);

      vencedor = comparaResultados(resultados);

      if(vencedor === "Jogador"){
        _mensagem = "Você venceu dessa vez";
        pontuacaoAtual += 1;

        atualizarPlacar(pontuacaoAtual);
      }
      else if(vencedor === "Empate"){
        _mensagem = "Empatamos...";
      }
      else{
        _mensagem = "Ganhei :)";
      }

      setMensagem(_mensagem);
    }
    catch(erro){
      console.warn(`Erro na execução do jogo ${erro}`);
    }
  }

  //Executa logo que os elementos do DOM são carregados, fazendo a configuração inicial
  useEffect(()=>{
    atualizarPlacar(0);
  },[]);

  const valoresExportados = {
    CONFIG,
    nomeJogo,
    mudaNomeJogo,
    placar,
    atualizarPlacar,
    executaJogo,
    mensagem,
    setMensagem,
  };

  return (
    <ControleContext.Provider value={valoresExportados}>
      {children}
    </ControleContext.Provider>
  );
}


export const useControle = () =>{
  const conteudo = useContext(ControleContext);

  if(!conteudo){
    console.log("Tem que estar dentro de um Provider");
  }

  return conteudo;

}