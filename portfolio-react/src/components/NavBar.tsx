import React from 'react';
import styles from './NavBar.module.css';

const NavBar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.navContainer} container`}>
        <div className={styles.logo}>Hiranya Madupu</div>
        <ul className={styles.navLinks}>
          <li><a href="#home" className={styles.navLink}>Home</a></li>
          <li><a href="#about" className={styles.navLink}>About</a></li>
          <li><a href="#skills" className={styles.navLink}>Skills</a></li>
          <li><a href="#projects" className={styles.navLink}>Projects</a></li>
          <li><a href="#contact" className={styles.navLink}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
