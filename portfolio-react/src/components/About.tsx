import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={`${styles.container} ${styles.aboutContainer}`}>
        <center><h2>About Me</h2>
        <p className={styles.aboutBio}>
          Aspiring Information Technology Engineer from Gokaraju Rangaraju Institute of Engineering and Technology, with a strong foundation in Information Assurance, Database Management Systems, and software development. Eager to contribute to a forward-thinking organization by applying and expanding my technical skills while supporting the organization's growth and success.
        </p></center>
        <div className={styles.educationTimeline}>
          <center>
          <div className={styles.eduCard}>
            <strong>B.Tech - IT, GRIET</strong> <span>(2022–2026)</span> – GPA: 9.2
          </div>
          <div className={styles.eduCard}>
            <strong>Intermediate - MPC, Sri Chaitanya Junior College</strong> <span>(2020–2022)</span> – 99.1%
          </div>
          <div className={styles.eduCard}>
            <strong>10th, Sri Chaitanya International School</strong> <span>(2020)</span> – 91.4%
          </div></center>
        </div>
      </div>
    </section>
  );
};

export default About;
