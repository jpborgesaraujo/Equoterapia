import React from 'react';
import { Link } from 'react-router-dom';

const TelaSessao = () => {
  
  return (
    <div style={estilos.container}>
      {/* Cabeçalho */}
      <div style={estilos.header}>
        <h2>Sessão 1 - <span style={estilos.status}>Aberta</span></h2>
      </div>

      {/* Informações do Participante */}
      <div style={estilos.participantInfo}>
      <img src="/imgs/pessoa.jpg" alt="" />
      <div>
          <h3>Ana Silva Barbosa</h3>
          <p>12 anos</p>
          <button style={estilos.finishSessionButton}>Finalizar Sessão</button>
        </div>
      </div>

      {/* Detalhes da Sessão */}
      <div style={estilos.sessionDetails}>
        <div>
          <strong>Horário da sessão:</strong> 14:30 – 15:30
        </div>
        <div>
          <strong>Data:</strong> 15/11/24
        </div>
      </div>

      {/* Navegação em Abas */}
     
      <div>
      {/* Botão com texto */}
    
    </div>
    <Link to="/outra-pagina" style={{ textDecoration: 'none' }}>
      <button
        style={styles.button}
        onMouseOver={handleMouseOver}  // Aciona o hover
        onMouseOut={handleMouseOut}    // Retira o hover
      >
        Detalhes da Sessão
      </button>
    </Link>

    <Link to="/outra-pagina" style={{ textDecoration: 'none' }}>
      <button
        style={styles.button}
        onMouseOver={handleMouseOver}  // Aciona o hover
        onMouseOut={handleMouseOut}    // Retira o hover
      >
        Informações do Praticante
      </button>
    </Link>

    <Link to="/outra-pagina" style={{ textDecoration: 'none' }}>
      <button
        style={styles.button}
        onMouseOver={handleMouseOver}  // Aciona o hover
        onMouseOut={handleMouseOut}    // Retira o hover
      >
        Feedback da Sessão Anterior
      </button>
    </Link>


      {/* Observações Gerais */}
      <div style={estilos.section}>
        <h4>Observações Gerais</h4>
        <p>Houve uma participação ativa nas atividades, com boa coordenação durante os exercícios de equilíbrio...</p>
      </div>

      {/* Observações para a Próxima Sessão */}
      <div style={estilos.section}>
        <h4>Observações para a Próxima Sessão</h4>
        <p>Será necessário incluir atividades de guia mais simples e aumentar o tempo de interação com o cavalo...</p>
      </div>

      {/* Equipe */}
      <div style={estilos.section}>
        <h4>Equipe</h4>
        <p><strong>Condutor:</strong> João Silva</p>
        <p><strong>Mediador(es):</strong> Ana Souza, Pedro Almeida</p>
        <p><strong>Encilhamento:</strong> Completo, com manta e estribo ajustados</p>
        <p><strong>Cavalo:</strong> Thor, baixo, temperamento calmo</p>
      </div>
    </div>
  );
};
const styles = {
  button: {
    backgroundColor: 'transparent',  // Torna o fundo transparente
    border: 'none',  // Remove a borda
    color: 'black',  // Cor do texto
    fontSize: '16px',  // Tamanho da fonte
    cursor: 'pointer',  // Mostra o cursor como pointer
    padding: '5px 10px',  // Espaçamento interno do botão
    textDecoration: 'none',  // Remove o sublinhado do texto
    borderBottom: '2px solid transparent',  // Borda inferior transparente inicialmente
    transition: 'border-bottom 0.3s ease',  // Transição suave para a borda inferior
  },
  buttonHover: {
    borderBottom: '2px solid green',  // Cor verde da faixa abaixo do texto
  }
};
const handleMouseOver = (e) => {
  e.target.style.borderBottom = styles.buttonHover.borderBottom; // Muda a cor da borda ao passar o mouse
};

const handleMouseOut = (e) => {
  e.target.style.borderBottom = styles.button.borderBottom; // Volta para a borda transparente ao tirar o mouse
};
// Estilos
const estilos = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '800px',
    margin: 'auto',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  status: {
    color: 'red',
  },
  participantInfo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  participantImage: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    marginRight: '15px',
  }
}

export default TelaSessao;