"use client";
import styles from "./page.module.css";
import EnhancedTable from "@/components/Table/Table";
import { AuthorData, authorBreadcrumbs, headCells } from "./page.utils";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

interface List {
  entries: {
    url: string;
  }[];
}

const getAuthors = async () => {
  try {
    const listResponse = await fetch(
      "https://openlibrary.org/people/zosiape/lists/OL228144L/seeds.json"
    );
    const listObject: List = await listResponse.json();
    const { entries } = listObject;
    const authorObjects = await Promise.all(
      entries.map(async (entry) => {
        try {
          const authorResponse = await fetch(
            `https://openlibrary.org${entry.url}.json`
          );
          const authorObject = await authorResponse.json();
          return authorObject;
        } catch (error) {
          console.log(error);
        }
      })
    );
    const authorsData: AuthorData[] = authorObjects.map((object) => ({
      id: object.key.split("/")[2],
      name: object.name,
      birth_date: object.hasOwnProperty("birth_date") ? object.birth_date : "-",
    }));
    return authorsData;
  } catch (error) {
    console.log(error);
  }
};

const AuthorsPage = async () => {
  const rows = await getAuthors();
  return (
    <main className={styles.main}>
      <div>
        <Breadcrumb breadcrumbs={authorBreadcrumbs} />
        {rows && (
          <EnhancedTable isClickable rows={rows} headCells={headCells} />
        )}
      </div>
    </main>
  );
};

export default AuthorsPage;
