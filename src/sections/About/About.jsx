import styles from './AboutStyles.module.css';
function About() {
  return (
    <section id="projects" className={styles.container}>
      <h1>About Me</h1>
      
      <p className={styles.paragraph}>
        Hello! I'm Aidan Wong, a computer science student at the University of Waterloo
        with a passion for technology and innovation.
        In my free time, I like to sing, play the piano, and play baseball.
        I enjoy tackling challenges; whether it's 
       coding or something completely new, I am always ready! 
       Feel free to connect with me on 
       <a href="https://linkedin.com/in/aidanfwong" target="_blank"> LinkedIn</a> or
        check out my projects on
         <a href="https://github.com/aidanfwong" target="_blank"> GitHub</a>. 
        Let's create something amazing together!
        </p>
    </section>
  );
}

export default About;
