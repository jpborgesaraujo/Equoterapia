import React from 'react';
import './FotoEstilo.css';
import foto from "./imgs/foto.jpg"
import BotaoEfeito from './BotaoEfeito';
import BotaoVerde from './BotaoArredondado';
import gear from './imgs/gear.png';
import { Link } from 'react-router-dom';

const CabecalhoSessao = (props) => {
  return (
    <>
      <div style={estilos.header}>
        <h2>Sessão 1 - <span style={estilos.status}>Aberta</span></h2>
      </div>
      <div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <img src={foto} alt="foto" title="foto" className="rounded-photo" />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', gap: '50px', alignItems: 'flex-start' }}>
              <div>
                <h3 style={{ color: '#07C158', margin: '0' }}>Ana Silva Barbosa</h3>
                <p style={{ margin: '5px 0' }}>12 anos</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <div>
                  <strong>Horário da sessão: </strong>14:30 – 15:30
                </div>
                <div style={{ marginTop: '5px' }}>
                  <strong>Data: </strong>15/11/24
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <BotaoVerde texto="Finalisar Sessão" to="/FinalizarSessao" />
              <Link 
                to="/configuracoes-sessao" 
                style={{ 
                  width: '31px', 
                  height: '35px', 
                  backgroundColor: 'black', 
                  border: 'none', 
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  textDecoration: 'none'
                }}
              >
                <img 
                  src={gear} 
                  alt="icone" 
                  style={{ width: '25px', height: '25px' }} 
                />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <BotaoEfeito texto="Detalhes da Sessão" to={props.detalhesPath} />
          <BotaoEfeito texto="Informações do Praticante" to={props.informacoesPath} />
          <BotaoEfeito texto="Feedback da Sessão Anterior" to={props.feedbackPath} />
        </div>
      </div>
    </>
  );
};

const estilos = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  status: {
    color: 'red',
  }
};

export default CabecalhoSessao;
