import styles from "../../../../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Environment() {
  const { query } = useRouter();

  return (
    <div className={styles.main}>
      <h1>{query.env}</h1>
    </div>
  );
}
