import { HeadCell } from "@/components/Table/Table.utils";
import Typography from "@mui/material/Typography";

export interface AuthorData {
  id: string;
  name: string;
  birth_date: string;
}

export const authorBreadcrumbs = [
  <Typography key='1' color='text.primary'>
    Authors
  </Typography>,
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
