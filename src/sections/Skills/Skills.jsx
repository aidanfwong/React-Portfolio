import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark.svg';
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Javascript" />
        <SkillList src={checkMarkIcon} skill="HTML/CSS" />
        <SkillList src={checkMarkIcon} skill="C/C++" />
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="Racket" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Electron" />
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Discord.Py" />
        <SkillList src={checkMarkIcon} skill="NumPy" />
        <SkillList src={checkMarkIcon} skill="Matplotlib" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Repl.it" />
        <SkillList src={checkMarkIcon} skill="Arduino IDE" />
        <SkillList src={checkMarkIcon} skill="DrRacket" />
        <SkillList src={checkMarkIcon} skill="VS Code" />
        <SkillList src={checkMarkIcon} skill="PyCharm" />
      </div>
    </section>
  );
}

export default Skills;
