import React from 'react';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  return (
    <>
      <section id="projects" className={styles.projectsSection}>
        <div className={styles.container}>
          <center><h2>Projects & Case Studies</h2>
          <p className={styles.projectsIntro}>
            A showcase of innovative solutions and technical implementations across various domains
          </p></center>
          <div className={styles.projectCards}>
            <div className={styles.projectCard}>
              <h3>AI Powered Face Recognition Security</h3>
              <p>
                A secure face recognition-based authentication system using Python, OpenCV, and JavaScript.
              </p>
              <div className={styles.projectTags}>
                <span>Python</span>
                <span>OpenCV</span>
                <span>JavaScript</span>
                <span>Computer Vision</span>
              </div>
              <div className={styles.projectLinks}>
                <a href="#" className={`${styles.btn} ${styles.btnOutline}`} target="_blank" rel="noopener noreferrer">View Code</a>
                <a href="#" className={`${styles.btn} ${styles.btnOutline}`} target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
            <div className={styles.projectCard}>
              <h3>Encryption and Decryption Tool</h3>
              <p>
                A web-based tool for secure text encryption and decryption, ensuring data privacy and security in communication.
              </p>
              <div className={styles.projectTags}>
                <span>Python</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>Cryptography</span>
              </div>
              <div className={styles.projectLinks}>
                <a href="#" className={`${styles.btn} ${styles.btnOutline}`} target="_blank" rel="noopener noreferrer">View Code</a>
                <a href="#" className={`${styles.btn} ${styles.btnOutline}`} target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="webdev-projects" className={styles.webDevProjects}>
        <div className={styles.container}>
          <h3>Web Development Portfolio</h3>
          <p>MERN Stack Projects</p>
          <ul className={styles.webProjectList}>
            <li>Basic Online Store</li>
            <li>Bank Application</li>
            <li>Restaurant App</li>
            <li>Flowers Website</li>
            <li>Cafe Website (React)</li>
            <li>Boutique Website</li>
          </ul>
          <div className={styles.projectLinks}>
            <a href="https://hiranyamadupu07.github.io/Portfolio/port.html" className={`${styles.btn} ${styles.btnPrimary}`} target="_blank" rel="noopener noreferrer">View Live Portfolio</a>
            <a href="https://github.com/HiranyaMadupu07" className={`${styles.btn} ${styles.btnOutline}`} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
