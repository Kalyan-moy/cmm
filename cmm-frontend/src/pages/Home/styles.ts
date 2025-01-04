import { Box, styled, Typography } from "@mui/material";

export const Container = styled(Box)(() => ({
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  columnGap: "2rem",
  flexWrap: "wrap",
}));

export const Item = styled(Box)(({ theme }) => ({
  height: "12rem",
  width: "12rem",
  paddingTop: "3rem",
  display: "flex",
  flexDirection: "column",
  // justifyContent: "center",
  alignItems: "center",
  borderRadius: "0.5rem",
  border: `1px solid ${theme.palette.divider}`,
  transition: "all 0.6s",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-1rem)",
    border: `1px solid ${theme.palette.primary.main}`,
  },
}));

export const Label = styled(Typography)(() => ({
  textAlign: "center",
  padding: "0 0.5rem",
}));
