import styles from "../../../../styles/Home.module.css";
import { useRouter } from "next/router";

const catalogo = [
  "terraza",
  "volakas",
  "galiano",
  "milenial",
  "ceramic",
  "cinamomo",
  "etc",
];

export default function Catalog() {
  const { asPath, query } = useRouter();
  return (
    <div className={styles.main}>
      <h1>Catalog {query.product}:</h1>

      <div>
        <ul>
          {catalogo.map((p) => (
            <li key={p}>
              <a href={asPath + "/" + p}>{p}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
