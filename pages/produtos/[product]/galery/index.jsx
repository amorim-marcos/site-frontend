import styles from "../../../../styles/Home.module.css";
import { useRouter } from "next/router";

const galery = [
  "sala de estar",
  "quarto",
  "toilette",
  "cozinha familiar",
  "etc",
];

export default function Galery() {
  const { asPath, query } = useRouter();
  return (
    <div className={styles.main}>
      <h1>Galery {query.product}:</h1>

      <div>
        <ul>
          {galery.map((p) => (
            <li key={p}>
              <a href={asPath + "/" + p}>{p}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
