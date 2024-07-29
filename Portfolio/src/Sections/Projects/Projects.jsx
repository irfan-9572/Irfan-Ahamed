import React from 'react';
import Styles from './ProjectStyles.module.css';
import viberr from './../../assets/viberr.png'
import freshBurger from './../../assets/fresh-burger.png'
import fresh from './../../assets/fitlift.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id='projects' className={Styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      
      <div className={Styles.projectsContainer}>
        <ProjectCard src ={viberr} link="www.github.com" h3="Viberr" p='Streaming App' />
        <ProjectCard src ={freshBurger} link="www.github.com" h3="freshBurger" p='Freshburger App' />
        <ProjectCard src ={fresh} link="www.github.com" h3="Fitliftr" p='Fitness App' />
      </div>
    </section>
  );
}

export default Projects;
