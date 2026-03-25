import React from 'react'
import styles from './Achievements.module.css'

interface AchievementItem {
  title: string
  description: string
  date: string
  icon: string
}

const Achievements: React.FC = () => {
  const achievementsData: AchievementItem[] = [
    {
      title: 'Outstanding Individual Award of the Unit 2023',
      description: 'Honored as an outstanding employee in 2023 at FPT Software\'s Business Unit R17',
      date: '2023',
      icon: '⭐'
    },
    {
      title: 'Value Player Award 2025',
      description: 'Honored as a Value Player of FPT Software\'s Business Unit REC in 2025',
      date: '2025',
      icon: '🚀'
    },
  ]

  return (
    <section id="achievements" className={styles.achievements}>
      <h2 className={styles.heading}><span className={styles.iconEmoji}>🌟</span> Honors & Achievements</h2>
      
      <div className={styles.achievementsGrid}>
        {achievementsData.map((achievement, index) => (
          <div key={index} className={styles.achievementCard}>
            <div className={styles.badge}>{achievement.icon}</div>
            
            <h3 className={styles.title}>{achievement.title}</h3>
            <p className={styles.date}>{achievement.date}</p>
            <p className={styles.description}>{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Achievements
