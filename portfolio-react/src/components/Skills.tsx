import React from 'react';
import styles from './Skills.module.css';

const Skills: React.FC = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        <center><h2>Skills & Expertise</h2>
        <p className={styles.skillsIntro}>
          A comprehensive skill set combining technical proficiency with strong interpersonal abilities
        </p></center>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCategory}>
            <h3>Programming Languages</h3>
            <div className={styles.skillTags}>
              <span className={styles.skillTag}>C</span>
              <span className={styles.skillTag}>Java</span>
              <span className={styles.skillTag}>Data Structures</span>
              <span className={styles.skillTag}>SQL</span>
              <span className={styles.skillTag}>HTML</span>
              <span className={styles.skillTag}>CSS</span>
              <span className={styles.skillTag}>JavaScript</span>
              <span className={styles.skillTag}>ReactJS</span>
              <span className={styles.skillTag}>MongoDB</span>
            </div>
          </div>
          {/* <div className={styles.skillCategory}>
            <h3>Web Technologies</h3>
            <div className={styles.skillTags}>
              <span className={styles.skillTag}>ReactJS</span>
              <span className={styles.skillTag}>MongoDB</span>
            </div>
          </div> */}
          {/* <div className={styles.skillCategory}>
            <h3>Core Concepts</h3>
            <div className={styles.skillTags}>
              <span className={styles.skillTag}>Data Structures</span>
              <span className={styles.skillTag}>Database Management</span>
              <span className={styles.skillTag}>Information Assurance</span>
            </div>
          </div> */}
          <div className={styles.skillCategory}>
            <h3>Soft Skills</h3>
            <div className={styles.skillTags}>
              <span className={styles.skillTag}>Communication</span>
              <span className={styles.skillTag}>Teamwork</span>
              <span className={styles.skillTag}>Leadership</span>
              <span className={styles.skillTag}>Problem-solving</span>
              <span className={styles.skillTag}>Adaptability</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
