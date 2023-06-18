"use client";

import react from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";
interface BreadcrumbsProps {
  breadcrumbs: react.JSX.Element[];
}

const Breadcrumb = (props: BreadcrumbsProps) => (
  <Stack spacing={2}>
    <Breadcrumbs separator='›' aria-label='breadcrumb'>
      {props.breadcrumbs}
    </Breadcrumbs>
  </Stack>
);

export default Breadcrumb;
