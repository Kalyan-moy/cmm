import Lottie from "lottie-react";
import { Box } from "@mui/material";
import Loader from "../../assets/lottie/loader.json";

const LoadingPage = () => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Lottie animationData={Loader} loop />
    </Box>
  );
};

export default LoadingPage;
