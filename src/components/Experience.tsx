import React from 'react'
import styles from './Experience.module.css'

interface ExperienceItem {
  company: string
  position: string
  startDate: string
  endDate: string
  description: string
  technologies: string[]
}

const Experience: React.FC = () => {
  // TODO: Update your work experience
  const experienceData: ExperienceItem[] = [
    {
      company: 'FPT Software',
      position: 'Team leader',
      startDate: 'Jan 2024',
      endDate: 'Present',
      description: 'Maintain and develop the Salesforce platform for businesses. Website development for a large Japanese corporation. This is a multi-industry corporation. The project I participated in was in the financial sector.',
      technologies: ['React', 'TypeScript', 'Node.js', 'Java', 'Salesforce']
    },
    {
      company: 'FPT Software',
      position: 'Developer',
      startDate: 'Feb 2022',
      endDate: 'Dec 2023',
      description: 'Migrate project structures previously developed at Salesforce to Java and React. Website development for a large Japanese corporation. This is a multi-industry corporation. The project I participated in was in the financial sector.',
      technologies: ['Java', 'Mybatis', 'Thymeleaf', 'TypeScript', 'SCSS', 'EJS']
    },
  ]

  return (
    <section id="experience" className={styles.experience}>
      <h2 className={styles.heading}><span className={styles.iconEmoji}>💼</span> Work Experience</h2>
      
      <div className={styles.experienceList}>
        {experienceData.map((item, index) => (
          <div key={index} className={styles.experienceCard}>
            <div className={styles.header}>
              <div className={styles.headerLeft}>
                <h3 className={styles.position}>{item.position}</h3>
                <p className={styles.company}>{item.company}</p>
              </div>
              <span className={styles.period}>{item.startDate} - {item.endDate}</span>
            </div>

            <p className={styles.description}>{item.description}</p>

            <div className={styles.technologies}>
              {item.technologies.map((tech, idx) => (
                <span key={idx} className={styles.badge}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
