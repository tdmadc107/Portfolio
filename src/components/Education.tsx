import React from 'react'
import styles from './Education.module.css'

interface EducationItem {
  school: string
  degree: string
  field: string
  startDate: string
  endDate: string
  description: string
}

const Education: React.FC = () => {
  const educationData: EducationItem[] = [
    {
      school: 'Quang Binh University',
      degree: 'Bachelor',
      field: 'Economic Law',
      startDate: '2014',
      endDate: '2018',
      description: 'GPA: 2.98/4.0 - Graduated with Good Standing'
    },
    {
      school: 'FPT Software Education',
      degree: 'Certificate',
      field: 'Full Stack Java Web Developer',
      startDate: '3/2021',
      endDate: '12/2021',
      description: 'Completed courses on website development using Java, Spring Boot and related technologies'
    }
  ]

  return (
    <section id="education" className={styles.education}>
      <h2 className={styles.heading}><span className={styles.iconEmoji}>📚</span> Education</h2>
      
      <div className={styles.timeline}>
        {educationData.map((item, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.marker}></div>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.school}>{item.school}</h3>
                <span className={styles.period}>{item.startDate} - {item.endDate}</span>
              </div>
              
              <div className={styles.cardBody}>
                <p className={styles.degree}>{item.degree} - {item.field}</p>
                <p className={styles.description}>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
