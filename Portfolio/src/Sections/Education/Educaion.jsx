import React from 'react'
import Styles from "../../Sections/Education/EducationStyles.module.css"
function Educaion() {
  return (
   <section id='education' className={Styles.container}>
    <h1>Education</h1>
    <div className={Styles.educationItem}>
      <h2>MSc Data Science</h2>
      <p>Kalasalingam University,Srivilliputhur</p>
      <span>(2021-2023)</span>
    </div>

    <div className={Styles.educationItem}>
      <h2>BSc Mathamatics</h2>
      <p>The New College,chennai</p>
      <span>(2018-2021)</span>
    </div>
   </section>
  )
}

export default Educaion

