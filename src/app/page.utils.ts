import { HeadCell } from "@/components/Table/Table.utils";

export interface AuthorData {
  id: number;
  name: string;
  birth_date: string;
}

export const rows: AuthorData[] = [
  {
    id: 1,
    name: "Pacio Genry",
    birth_date: "23rd February 1986",
  },
  {
    id: 2,
    name: "Zosia Najwspanialsza",
    birth_date: "13th March 2005",
  },
  {
    id: 3,
    name: "Zuzinka Kruszynka",
    birth_date: "30th March 2008",
  },
];

export const headCells: HeadCell<AuthorData>[] = [
  {
    id: "id",
    numeric: false,
    disablePadding: false,
    label: "ID",
  },
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Author",
  },
  {
    id: "birth_date",
    numeric: false,
    disablePadding: false,
    label: "Birth Date",
  },
];
