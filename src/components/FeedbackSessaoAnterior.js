import React from 'react';
import CabecalhoSessao from './CabecalhoSessao';

const FeedbackSessaoAnterior = () => {
  const tamanhoTituloVerde = '14px';
  const tamanhoTextoPreto = '16px';

  // Dados que virão do banco de dados
  const dadosFeedback = {
    observacoesGerais: "Houve uma participação ativa nas atividades, com boa coordenação durante os exercícios de equilíbrio...",
    observacoesProximaSessao: "Será necessário incluir atividades de guia mais simples e aumentar o tempo de interação com o cavalo...",
    condutor: "João Silva",
    mediadores: ["Ana Souza", "Pedro Almeida"],
    encilhamento: "Completo, com manta e estribo ajustados",
    cavalo: "Thor, baixo, temperamento calmo"
  };

  return (
    <div style={estilos.container}>
      <CabecalhoSessao />
      
      <div style={estilos.contentContainer}>
        {/* Observações Gerais */}
        <div style={estilos.section}>
          <h4 style={{...estilos.tituloVerde, fontSize: tamanhoTituloVerde}}>Observações Gerais</h4>
          <p style={{...estilos.textoPreto, fontSize: tamanhoTextoPreto}}>{dadosFeedback.observacoesGerais}</p>
        </div>

        {/* Observações para a Próxima Sessão */}
        <div style={estilos.section}>
          <h4 style={{...estilos.tituloVerde, fontSize: tamanhoTituloVerde}}>Observações para a Próxima Sessão</h4>
          <p style={{...estilos.textoPreto, fontSize: tamanhoTextoPreto}}>{dadosFeedback.observacoesProximaSessao}</p>
        </div>

        {/* Equipe */}
        <div style={estilos.section}>
          <p style={{...estilos.textoPreto, fontSize: tamanhoTextoPreto}}><strong>Condutor:</strong> {dadosFeedback.condutor}</p>
          <p style={{...estilos.textoPreto, fontSize: tamanhoTextoPreto}}><strong>Mediador(es):</strong> {dadosFeedback.mediadores.join(", ")}</p>
          <p style={{...estilos.textoPreto, fontSize: tamanhoTextoPreto}}><strong>Encilhamento:</strong> {dadosFeedback.encilhamento}</p>
          <p style={{...estilos.textoPreto, fontSize: tamanhoTextoPreto}}><strong>Cavalo:</strong> {dadosFeedback.cavalo}</p>
        </div>
      </div>
    </div>
  );
};

const estilos = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '800px',
    margin: 'auto',
  },
  contentContainer: {
    marginLeft: '10px',
    marginTop: '30px'
  },
  section: {
    marginBottom: '20px',
  },
  tituloVerde: {
    color: '#07C158',
    margin: '0'
  },
  textoPreto: {
    color: 'black',
    margin: '5px 0'
  }
};

export default FeedbackSessaoAnterior;
