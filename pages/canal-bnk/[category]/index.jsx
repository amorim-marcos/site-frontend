import styles from "../../../styles/Home.module.css";
import { useRouter } from "next/router";

const posts = ["Post1", "Post2", "Post3"];

export default function Category() {
  const { query } = useRouter();
  return (
    <div className={styles.main}>
      <h1>{query.category}</h1>

      <div>
        <ul>
          {posts.map((p) => (
            <li key={p}>
              <a href={`/canal-bnk/${query.category}/${p}`}>{p}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
