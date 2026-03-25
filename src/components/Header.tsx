import React from 'react'
import styles from './Header.module.css'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <h1 className={styles.title}>Dang Tien Dat</h1>
          <p className={styles.subtitle}>Java Developer | Salesforce Developer</p>
        </div>
        <ul className={styles.navLinks}>
          <li><a href="#personal">Information</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#achievements">Honors</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
