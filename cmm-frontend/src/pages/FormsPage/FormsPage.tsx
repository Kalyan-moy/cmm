import InsideNavbar from "@/components/InsideNavbar";
import { Box } from "@mui/material";
import { useState } from "react";

const FormsPage = () => {
  const [openAdd, setOpenAdd] = useState(false);

  const handleOpenAdd = () => {
    setOpenAdd(true);
  };
  return (
    <Box>
      <InsideNavbar
        title="Forms"
        buttonLabel="Create Form"
        onAdd={handleOpenAdd}
      />
    </Box>
  );
};

export default FormsPage;
