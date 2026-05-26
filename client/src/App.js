import { useEffect, useState } from 'react';
import './App.css';

const skills = [
  'JavaScript',
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'HTML & CSS',
  'REST APIs',
  'Responsive Design'
];

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        if (!response.ok) {
          throw new Error('Unable to load projects');
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return (
    <div className="portfolio-app">
      <header className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Full-stack portfolio</p>
          <h1>Hi, I’m Neeraj</h1>
          <p>
            I build modern web experiences using React, Node.js, and MongoDB. Explore
            my projects, skills, and backend-powered portfolio content.
          </p>
          <a className="primary-button" href="#projects">
            View projects
          </a>
        </div>
      </header>

      <section className="content-section" id="projects">
        <div className="section-header">
          <h2>Featured projects</h2>
          <p>Projects are loaded from a backend API and stored in MongoDB.</p>
        </div>

        {loading ? (
          <p className="status-message">Loading projects...</p>
        ) : error ? (
          <p className="status-message error">{error}</p>
        ) : projects.length === 0 ? (
          <p className="status-message">No projects found. Seed the database to see projects here.</p>
        ) : (
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project._id}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Live demo
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="content-section skills-section">
        <div className="section-header">
          <h2>Skills</h2>
          <p>Core technologies I use to build responsive and maintainable web apps.</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <span className="skill-pill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="content-section contact-section">
        <div className="section-header">
          <h2>Contact</h2>
          <p>Want to collaborate or learn more? Send a message and I’ll get back to you.</p>
        </div>
        <a className="secondary-button" href="mailto:hello@example.com">
          Email me
        </a>
      </section>
    </div>
  );
}

export default App;
