import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "@/components/Navbar";
import { Container } from "./styles";

const RootLayout = () => {
  return (
    <Container>
      <Navbar />
      <Box sx={{ flex: 1, overflowY: "auto" }}>
        <Outlet />
      </Box>
    </Container>
  );
};

export default RootLayout;
