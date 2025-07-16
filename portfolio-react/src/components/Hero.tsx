import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <img
        src="https://cdn.pixabay.com/photo/2017/06/09/07/37/notebook-2386034_1280.jpg"
        alt="Profile"
        className={styles.profileImage}
      />
      <div className={styles.heroText}>
        <h1 className={styles.heroTitle}>Hello!...I'm Hiranya</h1>
        <h2>Aspiring IT Engineer | Web Developer</h2>
        <p className={styles.heroDescription}>
          Passionate about creating innovative solutions with modern technologies. Building the future through code, one project at a time.
        </p>
        <button ><a 
                href="https://drive.google.com/file/d/1WH0_zucnoYBfq2BSkSMI7XDFu0B0ltW5/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${styles.resumebtn} ${styles.resumebtnOutline} $`} 
              >Resume</a></button>
      </div>
    </section>
  );
};

export default Hero;
