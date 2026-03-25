import React from 'react'
import Header from './components/Header'
import Personal from './components/Personal'
import Education from './components/Education'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Footer from './components/Footer'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Personal />
        <Education />
        <Experience />
        <Certifications />
        <Achievements />
      </main>
      <Footer />
    </div>
  )
}

export default App
