import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footerSection}>
      <div className={`${styles.footerContainer} container`}>
        <div className={styles.footerAbout}>
          <h3>Hiranya Madupu</h3>
          <p>
            Aspiring IT Engineer passionate about creating innovative solutions and building the future of technology.
          </p>
        </div>
        <div className={styles.footerLinks}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className={styles.footerConnect}>
          <h4>Connect With Me</h4>
          <div className={styles.socialIcons}>
            <a href="https://github.com/HiranyaMadupu07" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg width="24" height="24" fill="currentColor" aria-hidden="true" focusable="false" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.1.823 2.22 0 1.606-.015 2.896-.015 3.286 0 .32.216.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/hiranya-madupu-190551328/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="24" height="24" fill="currentColor" aria-hidden="true" focusable="false" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4v12h-4V8zm7 0h3.6v1.7h.1c.5-.9 1.7-1.8 3.5-1.8 3.7 0 4.4 2.4 4.4 5.5V20h-4v-5.5c0-1.3 0-3-1.8-3s-2 1.4-2 2.9V20h-4V8z" />
              </svg>
            </a>
            <a href="mailto:madupuhiranya07@gmail.com" aria-label="Email">
              <svg width="24" height="24" fill="currentColor" aria-hidden="true" focusable="false" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <center><p>© 2025 Hiranya Madupu. All rights reserved.</p>
        <p>Built with ❤️ using React & TypeScript</p></center>
      </div>
    </footer>
  );
};

export default Footer;
