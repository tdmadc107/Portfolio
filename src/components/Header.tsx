import React, { useState, useEffect } from 'react'
import styles from './Header.module.css'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'Information', href: '#personal' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Honors', href: '#achievements' },
  ]

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <h1 className={styles.title}>Dang Tien Dat</h1>
          <p className={`${styles.subtitle} ${isScrolled ? styles.subtitleHidden : ''}`}>
            Java Developer | Salesforce Developer
          </p>
        </div>
        <button
          className={`${styles.menuButton} ${isMenuOpen ? styles.menuButtonActive : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
          {menuItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
