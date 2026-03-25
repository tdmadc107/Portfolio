import React from 'react'
import styles from './Footer.module.css'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.section}>
          <h3>Contact</h3>
          <p>📧 Email: <a href="mailto:tiendat107.dev@gmail.com">tiendat107.dev@gmail.com</a></p>
          <p>📞 Phone: <a href="tel:+84363551555">+84 363 551 555</a></p>
        </div>

        <div className={styles.section}>
          <h3>Follow</h3>
          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/tiendat107/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/tdmadc107" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>

        <div className={styles.section}>
          <h3>Navigation</h3>
          <div className={styles.navLinks}>
            <a href="#personal">Information</a>
            <a href="#education">Education</a>
            <a href="#experience">Experience</a>
            <a href="#certifications">Certifications</a>
            <a href="#achievements">Honors</a>
          </div>
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.bottom}>
        <p>&copy; {currentYear} Dang Tien Dat. All rights reserved.</p>
        <p className={styles.credit}>Designed with ❤️ using React + TypeScript</p>
      </div>
    </footer>
  )
}

export default Footer
