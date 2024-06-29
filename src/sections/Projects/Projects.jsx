import styles from './ProjectsStyles.module.css';
import reflex from '../../assets/Reflex Trainer.jpg';
import bot from '../../assets/Bot Aidan.jpg';
import points from '../../assets/Points.jpg';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={reflex}
          link="https://github.com/aidanfwong/Reflex-Trainer"
          h3="Sharp"
          p="Reflex Trainer"
        />
        <ProjectCard
          src={bot}
          link="https://github.com/aidanfwong/Discord-Bot-20"
          h3="Bot Aidan"
          p="Discord Moderation Bot"
        />
        <ProjectCard
          src={points}
          link="https://github.com/aidanfwong/Discord-Bot-20"
          h3="Discord Bot"
          p="Moderation bot for SMCS Discord Server"
        />
        <ProjectCard
          src={fitLift}
          link=""
          h3="WIP"
          p="Coming soon..."
        />
      </div>
    </section>
  );
}

export default Projects;
