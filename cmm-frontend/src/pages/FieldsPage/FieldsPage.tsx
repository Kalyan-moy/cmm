import InsideNavbar from "@/components/InsideNavbar";
import { DataTypeEnum } from "@/types/global.types";
import { Box } from "@mui/material";
import { useState } from "react";

const DummyFields = [
  { id: 0, title: "Name", data_type: DataTypeEnum.String },
  { id: 1, title: "Age", data_type: DataTypeEnum.Number },
  { id: 2, title: "Profile Pic", data_type: DataTypeEnum.File },
];

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
