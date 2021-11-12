import styles from "../../../../styles/Home.module.css";
import Link from "next/link";

const items = ["Sala de estar", "Quarto", "Cozinha", "etc"];

export default function Gallery() {
  return (
    <div className={styles.main}>
      <h1>Gallery</h1>

      <ul>
        {items.map((i) => (
          <li key={i}>
            <Link href={`/produtos/bp-berneck/gallery/${i}`}>{i}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
