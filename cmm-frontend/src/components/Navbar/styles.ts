import { Box, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  boxShadow: `0px 0px 2px ${theme.palette.grey[500]}`,
  paddingRight: "1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "10vh",
}));

export const ImageLogo = styled("img")(() => ({
  height: "4rem",
}));
