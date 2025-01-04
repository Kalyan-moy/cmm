import InsideNavbar from "@/components/InsideNavbar";
import { DataTypeEnum } from "@/types/global.types";
import {
  Box,
  Card,
  Chip,
  Grid2 as Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";

interface IField {
  id: number;
  title: string;
  data_type: DataTypeEnum;
}

const DummyFields: IField[] = [
  { id: 0, title: "Name", data_type: DataTypeEnum.String },
  { id: 1, title: "Age", data_type: DataTypeEnum.Number },
  { id: 2, title: "Profile Pic", data_type: DataTypeEnum.File },
];

// const DummyFields: IField | [] = [];

const FieldsPage = () => {
  const theme = useTheme();
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
      <Grid container spacing={3} p={3}>
        {DummyFields.length > 0 ? (
          DummyFields?.map((item: IField) => (
            <Grid size={{ xs: 12, md: 6, lg: 3 }} key={item.id}>
              <Card variant="outlined">
                <Box
                  flex={1}
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  p={3}
                >
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ width: "100%" }}
                  >
                    <Typography fontSize={"1rem"} fontWeight={600}>
                      {item.title}
                    </Typography>

                    <Chip
                      label={
                        <Typography sx={{ fontSize: "0.8rem" }}>
                          {item.data_type}
                        </Typography>
                      }
                      size="small"
                      sx={{ backgroundColor: theme.palette.primary.light }}
                    />
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid size={12} display="flex" justifyContent="center">
            <Typography variant="h6" color="textSecondary">
              No results found.
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default FieldsPage;
