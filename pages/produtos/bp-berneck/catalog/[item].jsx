import styles from "../../../../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

export default function CatalogItem() {
  const { query } = useRouter();
  return (
    <div className={styles.main}>
      <h1>Catalog Item: {query.item}</h1>
    </div>
  );
}
