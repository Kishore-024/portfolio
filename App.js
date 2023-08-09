import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Portfolio.css';

function Home() {
  return (
    <div className="section">
      <h2>Welcome to My Portfolio</h2>
      <p>This is where I showcase my skills and projects.</p>
    </div>
  );
}

function Projects() {
  return (
    <div className="section">
      <h2>Projects</h2>
      
    </div>
  );
}

function Contact() {
  return (
    <div className="section">
      <h2>Contact Me</h2>
      {
    </div>
  );
}

function Portfolio() {
  return (
    <Router>
      <div className="portfolio">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default Portfolio;
