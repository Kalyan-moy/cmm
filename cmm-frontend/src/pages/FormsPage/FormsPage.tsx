import InsideNavbar from "@/components/InsideNavbar";
import { Box } from "@mui/material";
import { useState } from "react";
import CreateFormModal from "./components/CreateFormModal";

const FormsPage = () => {
  const [openAdd, setOpenAdd] = useState(false);

  const handleOpenAdd = () => {
    setOpenAdd(true);
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  return (
    <Box>
      <InsideNavbar
        title="Forms"
        buttonLabel="Create Form"
        onAdd={handleOpenAdd}
      />

      <CreateFormModal open={openAdd} onClose={handleCloseAdd} />
    </Box>
  );
};

export default FormsPage;
