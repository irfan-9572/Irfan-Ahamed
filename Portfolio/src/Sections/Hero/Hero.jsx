import React from "react";
import Styles from "./HeroStyles.module.css";
import Irfan from "../../assets/irfanImg.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import TwitterLight from "../../assets/twitter-light.svg";
import TwitterDark from "../../assets/twitter-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const GithubIcon = theme === "light" ? githubLight : githubDark;
  const TwitterIcon = theme === "light" ? TwitterLight : TwitterDark;
  return (
    <section id="hero" className={Styles.container}>
      <div className={Styles.colorModeContainer}>
        <img className={Styles.hero} src={Irfan} alt="profile pic irfan" />
        <img
          className={Styles.colorMode}
          src={themeIcon}
          onClick={toggleTheme}
          alt="color mode icon"
        />
      </div>
      <div className={Styles.info}>
        <h1>Irfan Ahamed Essa</h1>
        <h2>FrontEnd Developer</h2>
        <span>
          <a href="https://twitter.com" target="_blank">
            <img src={TwitterIcon} alt="Twitter Icon" />
          </a>
          <a href="https://github.com" target="_blank">
            <img src={GithubIcon} alt="github Icon" />
          </a>
          <a href="https://linkedin.com" target="_blank">
            <img src={linkedinIcon} alt="linkedin Icon" />
          </a>
        </span>
        <p className={Styles.description}>
          With a passion for developing modern React web commercial businesses
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
