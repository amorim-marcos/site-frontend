import { useRouter } from "next/router";
import styles from "../../../styles/Home.module.css";

export default function Post() {
  const { query } = useRouter();
  return (
    <div className={styles.main}>
      <h1>Post: {query.post}</h1>
    </div>
  );
}
