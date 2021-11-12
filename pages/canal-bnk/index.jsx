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

export default function CanalBnk() {
  return (
    <div className={styles.main}>
      <h1>Canal BNK</h1>

      <div>
        <ul>
          {categories.map((p) => (
            <li key={p.slug}>
              <a href={`/canal-bnk/${p.slug}`}>{p.title}</a>
            </li>
          ))}

          <li>
            <a href={`/canal-bnk/downloads`}>Downloads</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
