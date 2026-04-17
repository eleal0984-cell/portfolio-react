import React, { useState } from 'react'; 
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm'; 

function App() {
  const [temaEscuro, setTemaEscuro] = useState(false);

  const alternarTema = () => {
    setTemaEscuro(!temaEscuro);
  };

  const meusProjetos = [
    { id: 1, titulo: "Projeto 01", descricao: "Desenvolvido com HTML e CSS puro." },
    { id: 2, titulo: "Projeto 02", descricao: "Migração do portfólio para a biblioteca React." },
    { id: 3, titulo: "Projeto 03", descricao: "Aplicação de conceitos de componentes e estados." }
  ];

  return (
    <div className={`App ${temaEscuro ? 'dark-theme' : ''}`}>
      
      <Header temaEscuro={temaEscuro} alternarTema={alternarTema} />

      <main className="centralizado">
        <section id="sobre">
          <img src="/erika-foto.jpg" alt="Foto de Érika Leal" className="foto-perfil" />
          <h1>Olá, sou a Érika Leal</h1>
          <p>Professora e Estudante de Pedagogia e Educação Física.</p>
          <p>Atualmente, estou a aprender sobre a área de tecnologia.</p>
        </section>

        <section id="projetos">
          <h2>Meus Projetos</h2>
          <div className="grid-container">
            {meusProjetos.map((projeto) => (
              <ProjectCard 
                key={projeto.id} 
                titulo={projeto.titulo} 
                descricao={projeto.descricao} 
              />
            ))}
          </div>
        </section>

        <section id="contato">
          <h2>Contato</h2>
          <ContactForm />
        </section>

      </main>

      <footer>
        <p>Desenvolvido por Érika Leal - GitHub: eleal0984-cell</p>
      </footer>
    </div>
  );
}

export default App;