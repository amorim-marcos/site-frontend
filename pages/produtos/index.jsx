import styles from "../../styles/Home.module.css";

const produtos = [
  "BP-Berneck",
  "HDF-Berneck",
  "MDF-Berneck",
  "MDP-Berneck",
  "Plus-Berneck",
  "BERNECK-Pinus",
  "BERNECK-Teca",
];

export default function Produtos() {
  return (
    <div className={styles.main}>
      <h1>Nossos Produtos</h1>
      <div>
        <ul>
          {produtos.map((p) => (
            <li key={p}>
              <a href={`/produtos/${p}`}>{p}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
