import React from 'react';

// O Header recebe o estado do tema e a função para o alterar
function Header({ temaEscuro, alternarTema }) {
  return (
    <header>
      <div className="logo">Meu Portfólio - Érika Leal</div>
      <nav>
        <ul className="menu">
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
          {/* Botão que dispara o evento onClick ensinado no Slide 230 */}
          <li>
            <button className="btn-tema" onClick={alternarTema}>
              {temaEscuro ? "Claro" : "Escuro"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;