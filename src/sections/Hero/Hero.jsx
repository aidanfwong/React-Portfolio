import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Aidan.jpeg';
import twitterIcon from '../../assets/instagram.png';
import githubIcon from '../../assets/github.svg';
import linkedinIcon from '../../assets/linkedin.svg';
import CV from '../../assets/Aidan_Wong_Resume-5.pdf';

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Aidan Wong"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Aidan
          <br />
          Wong
        </h1>
        <h2>CS @ UWaterloo</h2>
        <span>
          <a href="https://instagram.com/aidanfwong" target="_blank">
            <img src={twitterIcon} alt="Instagram icon" />
          </a>
          <a href="https://github.com/aidanfwong" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/in/aidanfwong" target="_blank">
            <img src={linkedinIcon} alt="LinkedIn icon" />
          </a>
        </span>
        <p className={styles.description}>
        I am always eager to learn, tackle real-world challenges,
        and actively seek new job opportunities to apply my skills
        and grow professionally.
        </p>
        
        <a href={CV}>
          <button className="hover"download>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
