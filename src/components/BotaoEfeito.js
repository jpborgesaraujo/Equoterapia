import React from 'react';
import { Link } from 'react-router-dom'; // Importando o Link para navegação

const BotaoEfeito = ({ texto, to }) => {  // 'texto' para o texto do botão e 'to' para a URL de navegação
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
      borderBottom: '#07C158',  // Cor verde da faixa abaixo do texto
    }
  };

  const handleMouseOver = (e) => {
    e.target.style.borderBottom = styles.buttonHover.borderBottom; // Muda a cor da borda ao passar o mouse
  };

  const handleMouseOut = (e) => {
    e.target.style.borderBottom = styles.button.borderBottom; // Volta para a borda transparente ao tirar o mouse
  };

  return (
    <Link to={to} style={{ textDecoration: 'none' }}>  {/* 'to' recebe a URL para a navegação */}
      <button
        style={styles.button}
        onMouseOver={handleMouseOver}  // Aciona o hover
        onMouseOut={handleMouseOut}    // Retira o hover
      >
        {texto}  {/* O texto do botão será dinâmico com base na prop 'texto' */}
      </button>
    </Link>
  );
};

export default BotaoEfeito;
