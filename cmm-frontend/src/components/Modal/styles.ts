import { Box, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  minWidth: "300px",
  maxWidth: "90%",
  maxHeight: "95vh",
  display: "flex",
  flexDirection: "column",
  borderRadius: "0.5rem",
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.grey[600]}`,
  "&:focus": {
    outline: "none",
  },
}));
