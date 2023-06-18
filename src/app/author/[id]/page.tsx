"use client";

import styles from "../../page.module.css";
import EnhancedTable from "@/components/Table/Table";
import { BookData, getBookBreadcrumbs, headCells } from "./page.utils";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

interface BookList {
  entries: {
    key: string;
    title: string;
    subjects: string[];
  }[];
}

const getAuthorNameAndBooks = async (authorID: string) => {
  try {
    const authorResponse = await fetch(
      `https://openlibrary.org/authors/${authorID}.json`
    );
    const authorData = await authorResponse.json();
    const name: string = authorData.name;
    const bookListResponse = await fetch(
      `https://openlibrary.org/authors/${authorID}/works.json`
    );
    const bookListObject: BookList = await bookListResponse.json();
    const { entries } = bookListObject;

    const booksData: BookData[] = entries.map((object) => ({
      id: object.key.split("/")[2],
      title: object.title,
      subjects: object.hasOwnProperty("subjects")
        ? object.subjects.join(", ")
        : "-",
    }));
    return { booksData, name };
  } catch (error) {
    console.log(error);
  }
};

interface BooksPageProps {
  params: {
    id: string;
  };
}

const BooksPage = async (props: BooksPageProps) => {
  const data = await getAuthorNameAndBooks(props.params.id);

  return (
    <main className={styles.main}>
      <div>
        <Breadcrumb breadcrumbs={getBookBreadcrumbs(data?.name || "-")} />
        {data && <EnhancedTable rows={data.booksData} headCells={headCells} />}
      </div>
    </main>
  );
};

export default BooksPage;
