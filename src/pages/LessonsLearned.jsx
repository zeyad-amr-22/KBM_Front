import React from 'react'
import { useNavigate } from 'react-router-dom'
import LessonCard from '../components/LessonCard'
import styles from './LessonsLearned.module.css'
import {cardsList} from '../data/data.js'

const LessonsLearned = () => {

  const navigate = useNavigate()

  function NavToCreateLessons(){
    navigate('/CreateLesson')
  }

  return (
      <>
        <div className= {styles.lessonsLearnedContainer}>
          {/*the header section contains the header content (title and paragraph) and the create lesson button */}
          <div className = {styles.headerSection}>

            <div className= {styles.headerContent}>
              <h1 >Lessons Learned</h1>
              <p>A dedicated space for automation engineers to reflect, share, and grow - documenting key takeaways, challenges and solutions discovered during projects lifecycle.</p>
            </div>

            <button className={styles.createLessonButton} onClick= {NavToCreateLessons}>Create Lesson</button>
          </div>


          <div className={styles.lessonsGrid}>
            {cardsList.map((card, index) => (
              <LessonCard Key = {index} industry = {card.industry} title = {card.lessonTitle} author = {card.author}/>
            ))}
          </div>

        </div>
      </>
  )
}

export default LessonsLearned