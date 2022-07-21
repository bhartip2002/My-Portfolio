import React from "react";

import "./portfolio.css";
import projects from "../../projects";

function createEntry(project) {
  return (
    <article key={project.id} className="portfolio__item">
      <div className="portfolio__item-image">
        <img src={project.imageURL} alt="" />
      </div>
      <h3>{project.name}</h3>

      <div className="portfolio__item-cta">
        <a href={project.githubLink} className="btn" target="_blank">
          Github
        </a>
        <a
          href={project.websiteLink}
          className="btn btn-primary"
          target="_blank"
        >
          Application
        </a>
      </div>
    </article>
  );
}

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map(createEntry)}
      </div>
    </section>
  );
};

export default Portfolio;
