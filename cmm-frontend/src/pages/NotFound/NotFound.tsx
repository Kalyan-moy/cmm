import Lottie from "lottie-react";
import { Box } from "@mui/system";
import notFoundAnimation from "../../assets/lottie/not-found.json";

const NotFound = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box sx={{ height: "60vh", width: "80vw" }}>
        <Lottie animationData={notFoundAnimation} loop />
      </Box>
    </Box>
  );
};

export default NotFound;
