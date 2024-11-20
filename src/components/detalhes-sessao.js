import React from 'react';
import CabecalhoSessao from './CabecalhoSessao';

const DetalhesSessao = () => {
  // Configure os tamanhos das letras aqui
  const tamanhoTituloVerde = '16px';  // Altere este valor para mudar o tamanho dos títulos verdes
  const tamanhoTextoPreto = '16px';   // Altere este valor para mudar o tamanho dos textos pretos

  // Dados que virão do banco de dados
  const dadosSessao = {
    condutor: "João Silva",
    mediadores: ["Ana Souza", "Pedro Almeida"],
    encilhamento: "Completo, com manta e estribo ajustados",
    cavalo: "Thor",
    observacoes: "Os objetivos terapêuticos incluem o desenvolvimento motor, aumento da autoconfiança e integração sensorial. As atividades planejadas envolvem montaria, exercícios específicos e técnicas de respiração e relaxamento. Para isso, serão necessários capacetes, materiais de apoio, cercas e cones."
  };

  return (
    <div style={estilos.container}>
      <CabecalhoSessao />
      
      <div style={estilos.contentContainer}>
        <div style={estilos.section}>
          <p style={{...estilos.textoPreto, fontSize: tamanhoTextoPreto}}><strong>Condutor:</strong> {dadosSessao.condutor}</p>
          <p style={{...estilos.textoPreto, fontSize: tamanhoTextoPreto}}><strong>Mediador(es):</strong> {dadosSessao.mediadores.join(", ")}</p>
          <p style={{...estilos.textoPreto, fontSize: tamanhoTextoPreto}}><strong>Encilhamento:</strong> {dadosSessao.encilhamento}</p>
          <p style={{...estilos.textoPreto, fontSize: tamanhoTextoPreto}}><strong>Cavalo:</strong> {dadosSessao.cavalo}</p>
        </div>

        <div style={estilos.section}>
          <h4 style={{...estilos.tituloVerde, fontSize: tamanhoTituloVerde}}>Observações para a sessão</h4>
          <p style={{...estilos.textoPreto, fontSize: tamanhoTextoPreto}}>{dadosSessao.observacoes}</p>
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

export default DetalhesSessao;
