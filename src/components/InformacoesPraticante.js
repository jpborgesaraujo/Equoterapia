import React from 'react';
import CabecalhoSessao from './CabecalhoSessao';

const InformacoesPraticante = () => {
  const tamanhoTituloVerde = '14px';
  const tamanhoTextoPreto = '16px';

  // Dados que virão do banco de dados
  const dadosPraticante = {
    nomeCompleto: "João Pedro Martins",
    sexo: "Masculino", 
    cartaoSUS: "99 99999 9999",
    dataNascimento: "10/06/2017",
    idade: "7 Anos",
    telefone: "(62) 99999-9999",
    email: "exemplo@exemplo.com",
    endereco: "Av. Pres. Vargas 220, Setor Central 459, Ceres - GO",
    cuidador: "Mãe",
    nomePai: "Carlos Eduardo Martins",
    nomeMae: "Maria Fernanda Martins"
  };

  const dadosFeedback = {
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
        {/* Dados do Praticante */}
        <div style={estilos.section}>
          <p style={{...estilos.textoPreto, fontSize: tamanhoTextoPreto}}><strong>Nome Completo:</strong> {dadosPraticante.nomeCompleto}</p>
          <p style={{...estilos.textoPreto, fontSize: tamanhoTextoPreto}}><strong>Sexo:</strong> {dadosPraticante.sexo}</p>
          <p style={{...estilos.textoPreto, fontSize: tamanhoTextoPreto}}><strong>Nº Cartão SUS:</strong> {dadosPraticante.cartaoSUS}</p>
          <p style={{...estilos.textoPreto, fontSize: tamanhoTextoPreto}}><strong>Data de Nascimento:</strong> {dadosPraticante.dataNascimento} ({dadosPraticante.idade})</p>
          <p style={{...estilos.textoPreto, fontSize: tamanhoTextoPreto}}><strong>Telefone:</strong> {dadosPraticante.telefone}</p>
          <p style={{...estilos.textoPreto, fontSize: tamanhoTextoPreto}}><strong>E-mail:</strong> {dadosPraticante.email}</p>
          <p style={{...estilos.textoPreto, fontSize: tamanhoTextoPreto}}><strong>Endereço:</strong> {dadosPraticante.endereco}</p>
          <p style={{...estilos.textoPreto, fontSize: tamanhoTextoPreto}}><strong>Cuidador:</strong> {dadosPraticante.cuidador}</p>
          <p style={{...estilos.textoPreto, fontSize: tamanhoTextoPreto}}><strong>Nome do Pai:</strong> {dadosPraticante.nomePai}</p>
          <p style={{...estilos.textoPreto, fontSize: tamanhoTextoPreto}}><strong>Nome da Mãe:</strong> {dadosPraticante.nomeMae}</p>
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
    marginLeft: '45px',
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

export default InformacoesPraticante;
