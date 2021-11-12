import styles from "../../../../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Produtos() {
  const { query } = useRouter();

  return (
    <div className={styles.main}>
      <h1>{query.name}</h1>
    </div>
  );
}
