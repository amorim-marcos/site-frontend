import styles from "../../../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Produtos() {
  const { query } = useRouter();
  return (
    <div className={styles.main}>
      <h1>{query.product}</h1>

      <div>
        <ul>
          <li>
            <a href={`/produtos/${query.product}/catalog`}>Catalog</a>
          </li>
          <li>
            <a href={`/produtos/${query.product}/galery`}>Galery</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
