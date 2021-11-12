import styles from "../../../styles/Home.module.css";
import Link from "next/link";
export default function BpBerneck() {
  return (
    <div className={styles.main}>
      <h1>BP Berneck</h1>

      <ul>
        <li>
          <Link href="/produtos/bp-berneck/catalog">Catalog</Link>
        </li>
        <li>
          <Link href="/produtos/bp-berneck/gallery">gallery</Link>
        </li>
      </ul>
    </div>
  );
}
