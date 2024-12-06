import styles from './Search.module.css';

function About() {
  return (
    <section className={styles.container}>
      <h2>Pesquise por Matrícula ou Nome</h2>
      <div className={styles.about_container}>
        <label htmlFor="search" className={styles.search_label} />
        <input
          id="search"
          type="text"
          placeholder="Matrícula ou Nome"
          className={styles.search_input}
        />
        <button className={styles.search_button}>Pesquisar</button>
      </div>
    </section>
  );
}

export default About;
