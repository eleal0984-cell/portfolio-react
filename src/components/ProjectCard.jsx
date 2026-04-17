import React from 'react';

function ProjectCard({ titulo, descricao, link }) {
  return (
    <div className="cartao">
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <a href={link} target="_blank" rel="noreferrer">Ver no GitHub</a>
    </div>
  );
}

export default ProjectCard;