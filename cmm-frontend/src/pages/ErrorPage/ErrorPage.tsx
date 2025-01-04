import Lottie from "lottie-react";
import { Box, Button, Typography } from "@mui/material";
import UfoError from "../../assets/lottie/ufo-error.json";

const ErrorPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Lottie animationData={UfoError} loop />

      <Typography variant="h6">Oops, we're getting Error 500</Typography>

      <Typography variant="body2" mt={1}>
        Brace yourself till we get the error fixed.
      </Typography>
      <Typography variant="body2" mb={2}>
        You may also refresh the page or try again later
      </Typography>

      <Button className="mt-5" onClick={() => window.location.reload()}>
        Reload
      </Button>
    </Box>
  );
};

export default ErrorPage;
