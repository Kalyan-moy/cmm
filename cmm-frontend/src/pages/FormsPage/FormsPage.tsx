import InsideNavbar from "@/components/InsideNavbar";
import {
  Box,
  Card,
  Grid2 as Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CreateFormModal from "./components/CreateFormModal";
import { useGetForms } from "@/services/queries/forms.query";
import Lottie from "lottie-react";
import Loader from "../../assets/lottie/loader.json";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";

const FormsPage = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const { data, isLoading } = useGetForms();
  const navigate = useNavigate();

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
      {isLoading && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Lottie animationData={Loader} loop style={{ width: "10vw" }} />
        </Box>
      )}
      <Grid container spacing={3} p={3}>
        {data && data.forms && data.forms.length > 0 ? (
          data.forms?.map((item, idx) => (
            <Grid size={{ xs: 12, md: 6, lg: 3 }} key={idx}>
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

                    <IconButton
                      onClick={() => {
                        navigate(`/public/form/${item.id}`);
                      }}
                    >
                      <VisibilityIcon />
                    </IconButton>
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

      <CreateFormModal open={openAdd} onClose={handleCloseAdd} />
    </Box>
  );
};

export default FormsPage;
