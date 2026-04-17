import React from 'react';

function ProjectCard({ titulo, descricao }) {
  return (
    <div className="card-projeto">
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      {/* Aqui transformamos o texto em link real */}
      <a 
        href="https://github.com/eleal0984-cell/portfolio-react" 
        target="_blank" 
        rel="noreferrer"
        className="link-github"
      >
        Ver no GitHub
      </a>
    </div>
  );
}

export default ProjectCard;