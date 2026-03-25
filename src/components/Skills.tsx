import React from 'react'
import styles from './Skills.module.css'

const Skills: React.FC = () => {
  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.skillsSectionTitle}>Skills</h2>

      <div className={styles.skillsGrid}>
        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>🔤 Language & AI</h3>
          <div className={styles.skillSubcategory}>
            <p className={styles.subcategoryLabel}>Programming Language:</p>
            <div className={styles.skillTags}>
              <span className={styles.skillTag}>Java</span>
              <span className={styles.skillTag}>Apex</span>
              <span className={styles.skillTag}>Javascript</span>
            </div>
          </div>
          <div className={styles.skillSubcategory}>
            <p className={styles.subcategoryLabel}>AI & Prompt Engineering:</p>
            <div className={styles.skillTags}>
              <span className={styles.skillTag}>Prompt Engineering</span>
              <span className={styles.skillTag}>Vibe Coding</span>
              <span className={styles.skillTag}>AI-Assisted Development</span>
              <span className={styles.skillTag}>Code Generation</span>
            </div>
          </div>
        </div>

        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>⚙️ Back-end Web</h3>
          <div className={styles.skillSubcategory}>
            <p className={styles.subcategoryLabel}>Java Technologies:</p>
            <div className={styles.skillTags}>
              <span className={styles.skillTag}>Spring Boot</span>
              <span className={styles.skillTag}>MyBatis</span>
              <span className={styles.skillTag}>JDBC</span>
              <span className={styles.skillTag}>Spring Security</span>
              <span className={styles.skillTag}>Hibernate</span>
              <span className={styles.skillTag}>JPA</span>
              <span className={styles.skillTag}>REST API</span>
            </div>
          </div>
          <div className={styles.skillSubcategory}>
            <p className={styles.subcategoryLabel}>Salesforce:</p>
            <div className={styles.skillTags}>
              <span className={styles.skillTag}>Apex Trigger</span>
              <span className={styles.skillTag}>Asynchronous Apex</span>
              <span className={styles.skillTag}>Visualforce</span>
              <span className={styles.skillTag}>Apex Testing</span>
              <span className={styles.skillTag}>Data Modeling</span>
            </div>
          </div>
        </div>

        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>🎨 Front-end Web</h3>
          <div className={styles.skillTags}>
            <span className={styles.skillTag}>Thymeleaf</span>
            <span className={styles.skillTag}>ReactJS</span>
            <span className={styles.skillTag}>HTML5</span>
            <span className={styles.skillTag}>CSS3</span>
          </div>
        </div>

        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>🛠️ Developer Tools</h3>
          <div className={styles.skillTags}>
            <span className={styles.skillTag}>Salesforce Lightning</span>
            <span className={styles.skillTag}>Git</span>
            <span className={styles.skillTag}>Postman</span>
            <span className={styles.skillTag}>Gitlab</span>
            <span className={styles.skillTag}>Adobe XD</span>
            <span className={styles.skillTag}>VS Code</span>
            <span className={styles.skillTag}>NPM/Yarn</span>
            <span className={styles.skillTag}>Eclipse</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills
