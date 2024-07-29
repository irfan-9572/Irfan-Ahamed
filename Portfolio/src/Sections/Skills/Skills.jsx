import React from 'react';
import Styles from "../Skills/SkillsStyles.module.css";
import SkillList from "../../common/SkillList";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id='skills' className={Styles.container}>
      <h1 className={Styles.sectionTitle}>Skills</h1>
      <div className={Styles.outerBox}>
        <h2>Web Technology</h2>
        <div className={Styles.skillList}>
          <SkillList src={checkMarkIcon} skill="HTML5" />
          <SkillList src={checkMarkIcon} skill="CSS" />
          <SkillList src={checkMarkIcon} skill="JavaScript" />
          <SkillList src={checkMarkIcon} skill="React" />
          <SkillList src={checkMarkIcon} skill="Node" />
          <SkillList src={checkMarkIcon} skill="Git" />
        </div>
        <hr />
        <h2>Database</h2>
        <div className={Styles.skillList}>
          <SkillList src={checkMarkIcon} skill="MYSQL" />
          <SkillList src={checkMarkIcon} skill="PostgreSQL" />
        </div>
        <hr />
        <h2>Framework</h2>
        <div className={Styles.skillList}>
          <SkillList src={checkMarkIcon} skill="Bootstrap" />
          <SkillList src={checkMarkIcon} skill="Express.js" />
        </div>
        <hr />
        <h2>BI Tools</h2>
        <div className={Styles.skillList}>
          <SkillList src={checkMarkIcon} skill="Power BI" />
          <SkillList src={checkMarkIcon} skill="Tableau" />
          <SkillList src={checkMarkIcon} skill="Microsoft Excel" />
        </div>
      </div>
  
    </section>
    
  );
}

export default Skills;
