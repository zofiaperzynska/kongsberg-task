import { HeadCell } from "@/components/Table/Table.utils";
import { Link, Typography } from "@mui/material";

export interface BookData {
  id: string;
  title: string;
  subjects: string;
}

export const headCells: HeadCell<BookData>[] = [
  {
    id: "id",
    numeric: false,
    disablePadding: false,
    label: "ID",
  },
  {
    id: "title",
    numeric: false,
    disablePadding: false,
    label: "Title",
  },
  {
    id: "subjects",
    numeric: false,
    disablePadding: false,
    label: "Subjects",
  },
];

export const getBookBreadcrumbs = (name: string) => [
  <Link
    underline='hover'
    key='1'
    color='inherit'
    href='/'
    sx={{ "&:hover": { cursor: "pointer" } }}
  >
    Authors
  </Link>,
  <Typography key='2' color='text.primary'>
    {name}
  </Typography>,
  <Typography key='3' color='text.primary'>
    Books
  </Typography>,
];
