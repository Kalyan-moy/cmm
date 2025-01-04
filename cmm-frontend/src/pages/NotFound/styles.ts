import { Box, styled } from "@mui/material";

export const Container = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const Content = styled(Box)(() => ({
  height: "60vh",
  width: "80vw",
}));
