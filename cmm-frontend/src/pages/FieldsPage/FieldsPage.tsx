import InsideNavbar from "@/components/InsideNavbar";
import { Box } from "@mui/material";
import { useState } from "react";

const FieldsPage = () => {
  const [openAdd, setOpenAdd] = useState(false);

  const handleOpenAdd = () => {
    setOpenAdd(true);
  };
  return (
    <Box>
      <InsideNavbar
        title="Fields"
        buttonLabel="Add Field"
        onAdd={handleOpenAdd}
      />
    </Box>
  );
};

export default FieldsPage;
