import React from 'react'
import styles from './Personal.module.css'
import Skills from './Skills'

const Personal: React.FC = () => {
  return (
    <section id="personal" className={styles.personal}>
      <div className={styles.content}>
        <div className={styles.avatar}>
          <img src="./assets/images/portfolio_header.jpg" alt="Avatar" />
        </div>

        <div className={styles.info}>
          <h2 className={styles.heading}>Personal Information</h2>

          <div className={styles.details}>
            <div className={styles.item}>
              <span className={styles.label}><span className={styles.icon}>📞</span> Phone:</span>
              <span className={styles.value}>+84 363 551 555</span>
            </div>

            <div className={styles.item}>
              <span className={styles.label}><span className={styles.icon}>📧</span> Email:</span>
              <span className={styles.value}>tiendat107.dev@gmail.com</span>
            </div>

            <div className={styles.item}>
              <span className={styles.label}><span className={styles.icon}>📍</span> Address:</span>
              <span className={styles.value}>Da Nang, Vietnam</span>
            </div>

            <div className={styles.item}>
              <span className={styles.label}><span className={styles.icon}>💼</span> Position:</span>
              <span className={styles.value}>Java Developer | Salesforce Developer</span>
            </div>
          </div>

          <div className={styles.socials}>
            <a href="https://www.linkedin.com/in/tiendat107/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              LinkedIn
            </a>
            <a href="https://github.com/tdmadc107" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              GitHub
            </a>
          </div>

          <div className={styles.bioSection}>
            <div className={styles.bioCard}>
              <h3 className={styles.bioTitle}>Introduction</h3>
              <p className={styles.bioText}>
                I'm a dedicated Developer with over 4 years of experience in Website Development.
                Skilled in Java/Salesforce and have successfully completed multiple projects involving web development.
                Passionate about creativity and continuously seeking innovative solutions to enhance product quality.
              </p>
            </div>
          </div>

          <div className={styles.highlightsSection}>
            <div className={styles.highlightCard}>
              <h3 className={styles.highlightTitle}>🎯 Expertise</h3>
              <p className={styles.highlightDescription}>
                With over 4 years of experience, I specialize in backend development using Java and Apex, combined with strong API development capabilities.
              </p>
              <ul className={styles.highlightList}>
                <li>Backend development with Java & Apex</li>
                <li>API development and integration</li>
                <li>Salesforce platform specialization</li>
                <li>Full-stack web development</li>
              </ul>
            </div>

            <div className={styles.highlightCard}>
              <h3 className={styles.highlightTitle}>🚀 Characteristics</h3>
              <p className={styles.highlightDescription}>
                Always ready to seek creative and modern solutions to improve product quality. Applying AI to enhance work efficiency and increase development productivity.
              </p>
              <ul className={styles.highlightList}>
                <li>Creative and innovative solutions</li>
                <li>AI-driven development approach</li>
                <li>Continuous learning mindset</li>
                <li>Problem-solving oriented</li>
              </ul>
            </div>
          </div>

          <Skills />
        </div>
      </div>
    </section>
  )
}

export default Personal
