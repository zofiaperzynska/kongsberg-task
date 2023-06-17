import styles from "./page.module.css";
import EnhancedTable from "@/components/Table/Table";
import { headCells, rows } from "./page.utils";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <EnhancedTable rows={rows} headCells={headCells} />
      </div>
    </main>
  );
}
