import React from 'react';
import './FotoEstilo.css';
import foto from "./imgs/foto.jpg"
import BotaoEfeito  from './BotaoEfeito';
import BotaoVerde from './BotaoArredondado';

const TelaSessao = () => {
  
  return (
    <div style={estilos.container}>
      {/* Cabeçalho */}
      <div style={estilos.header}>
        <h2>Sessão 1 - <span style={estilos.status}>Aberta</span></h2>
      </div>

      {/* Informações do Participante */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <img src={foto} alt="foto" title="foto" className="rounded-photo" />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ color: '#07C158' }}>Ana Silva Barbosa</h3>
          </div>
        <strong>Horário da sessão:
        </strong> 14:30 – 15:30
        </div>
        </div>
          
          <p>12 anos</p>
           
          
          <h3>Ana Silva Barbosa</h3>
          <p>12 anos</p>
          
        <BotaoVerde texto="Finalisar Sessão" to="/FinalizarSessao" />
        <strong>Data:</strong> 15/11/24
          
          
        
      

      {/* Detalhes da Sessão */}
     

      {/* Navegação em Abas */}
     
      <div>
      {/* Botão com texto */}
    
    </div>
    <div>
      {""}
      <BotaoEfeito texto="Detalhes da Sessão" to="/detalhes-sessao" />
      <BotaoEfeito texto="Informações do Praticante" to="/informacoes-praticante" />
      <BotaoEfeito texto="Feedback da Sessão Anterior" to="/feedback-sessao" />
    </div>


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
  )
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