import React, { useState } from 'react'; 
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import './App.css';

function App() {
  // ETAPA 6: Criar o estado para controlar o tema (Slide 262)
  // O useState guarda a "memória" se o site está escuro ou não [cite: 303, 320]
  const [temaEscuro, setTemaEscuro] = useState(false);

  // Função para alternar entre claro e escuro [cite: 230, 548]
  const alternarTema = () => {
    setTemaEscuro(!temaEscuro);
  };

  // ETAPA 5: Array de objetos com os seus projetos (Slide 260) [cite: 328, 527]
  const meusProjetos = [
    { id: 1, titulo: "Projeto 01", descricao: "Desenvolvido com HTML e CSS puro." },
    { id: 2, titulo: "Projeto 02", descricao: "Migração do portfólio para a biblioteca React." },
    { id: 3, titulo: "Projeto 03", descricao: "Aplicação de conceitos de componentes e estados." }
  ];

  return (
    // ETAPA 6: Aplicar a classe .dark-theme dinamicamente (Slide 255) 
    <div className={`App ${temaEscuro ? 'dark-theme' : ''}`}>
      
      {/* Passamos a função e o estado para o Header via Props [cite: 232, 260] */}
      <Header temaEscuro={temaEscuro} alternarTema={alternarTema} />

<main className="centralizado">
        <section id="sobre">
          {/* A tag da imagem agora está completa e fechada corretamente */}
          <img src="/erika-foto.jpg" alt="Foto de Érika Leal" className="foto-perfil" />
          <h1>Olá, sou a Érika Leal</h1>
          <p>Professora e Estudante de Pedagogia e Educação Física.</p>
          <p>Atualmente, estou a aprender sobre a área de tecnologia.</p>
        </section>

        <section id="projetos">
          <h2>Meus Projetos</h2>
          <div className="grid-container">
            {/* ETAPA 5: Usamos o .map() para criar os cartões automaticamente */}
            {meusProjetos.map((projeto) => (
              <ProjectCard 
                key={projeto.id} 
                titulo={projeto.titulo} 
                descricao={projeto.descricao} 
              />
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>Desenvolvido por Érika Leal - GitHub: eleal0984-cell</p>
      </footer>
    </div>
  );
}

export default App;