import { Box } from "@mui/material";

import { Container, ImageLogo } from "./styles";
import CMMLogo from "@/assets/images/cmm.png";
import Profile from "./Components/Profile";

const Navbar = () => {
  return (
    <Container>
      <Box display="flex" alignItems="center">
        <ImageLogo src={CMMLogo} />
      </Box>

      <Box>
        <Profile />
      </Box>
    </Container>
  );
};

export default Navbar;
