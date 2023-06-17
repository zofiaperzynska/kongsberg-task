import react from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Toolbar from "@mui/material/Toolbar";

const EnhancedTableToolbar = () => {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      <Breadcrumb />
    </Toolbar>
  );
};

export default EnhancedTableToolbar;
