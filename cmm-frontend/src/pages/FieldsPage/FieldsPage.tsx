import InsideNavbar from "@/components/InsideNavbar";
import {
  Box,
  Card,
  Chip,
  Grid2 as Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import AddFieldModal from "./components/AddFieldModal";
import { useGetFields } from "@/services/queries/fields.query";
import Lottie from "lottie-react";
import Loader from "../../assets/lottie/loader.json";

const FieldsPage = () => {
  const theme = useTheme();
  const [openAdd, setOpenAdd] = useState(false);
  const { data, isLoading } = useGetFields();

  const handleOpenAdd = () => {
    setOpenAdd(true);
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  return (
    <Box>
      <InsideNavbar
        title="Fields"
        buttonLabel="Add Field"
        onAdd={handleOpenAdd}
      />
      {isLoading && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Lottie animationData={Loader} loop style={{ width: "10vw" }} />
        </Box>
      )}
      <Grid container spacing={3} p={3}>
        {data && data.fields && data.fields.length > 0 ? (
          data.fields?.map((item) => (
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

      <AddFieldModal open={openAdd} onClose={handleCloseAdd} />
    </Box>
  );
};

export default FieldsPage;
