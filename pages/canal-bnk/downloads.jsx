import styles from "../../styles/Home.module.css";

const categories = [
  {
    slug: "inspiracao-sob-medida",
    title: "INSPIRAÇÃO SOB MEDIDA",
  },
  {
    slug: "materia-prima",
    title: "MATÉRIA-PRIMA: CONHECIMENTO",
  },
  {
    slug: "mundo-berneck",
    title: "MUNDO BERNECK",
  },
];

export default function Downloads() {
  return (
    <div className={styles.main}>
      <h1>Downloads</h1>
    </div>
  );
}
