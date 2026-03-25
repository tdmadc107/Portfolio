import React from 'react'
import styles from './Certifications.module.css'

interface CertificationItem {
  name: string
  issuer: string
  issueDate: string
  expiryDate?: string
  credentialId?: string
  credentialUrl?: string
}

const Certifications: React.FC = () => {
  const certificationsData: CertificationItem[] = [
    {
      name: 'Oracle Certified Associate, Java SE 8 Programmer',
      issuer: 'Oracle',
      issueDate: '25 April 2023',
      credentialUrl: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=017B4E28E0AAC0BC235C70AB6375F42FF3496548DE935392FEF484E8C46EF158&fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExMjFraDR3OWZjTDkwZ2dMYXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR7NWOQ-zJ7ifsetpG9ZBmvRj2TjGYtSxKzhCYG713MQ93t7vOg0L94qcF3A8w_aem__Ipz1NkSHRlWcn6jZkFVew'
    },
    {
      name: 'React Developer Certification',
      issuer: 'Udacity',
      issueDate: '05 December 2022',
      credentialUrl: 'https://cloud.google.com/certification'
    },
    {
      name: 'Intermediate JavaScript',
      issuer: 'Udacity',
      issueDate: '14 June 2023',
      credentialUrl: 'https://confirm.udacity.com/e/19e8b90a-e30d-11ed-8cf9-03dae01f67dd'
    },
    {
      name: 'Front End Web Developer',
      issuer: 'Udacity',
      issueDate: '12 October 2023',
      credentialUrl: 'https://confirm.udacity.com/e/dc24c5ee-360b-11ee-80c5-8f033910c226'
    }
  ]

  return (
    <section id="certifications" className={styles.certifications}>
      <h2 className={styles.heading}><span className={styles.iconEmoji}>🏆</span> Certifications</h2>
      
      <div className={styles.certificationsGrid}>
        {certificationsData.map((cert, index) => (
          <div key={index} className={styles.certCard}>
            <div className={styles.icon}>🎓</div>
            
            <h3 className={styles.name}>{cert.name}</h3>
            <p className={styles.issuer}>{cert.issuer}</p>
            
            <div className={styles.dates}>
              <span className={styles.issueDate}>Issued: {cert.issueDate}</span>
              {cert.expiryDate && (
                <span className={styles.expiryDate}>Expiry: {cert.expiryDate}</span>
              )}
            </div>

            {cert.credentialId && (
              <p className={styles.credentialId}>ID: {cert.credentialId}</p>
            )}

            {cert.credentialUrl && (
              <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                View Certificate →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certifications
