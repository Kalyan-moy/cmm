import { Box, styled } from "@mui/material";
import { Toast } from "./Snackbar";

export const Container = styled(Box)<{ type: Toast["type"] }>(
  ({ theme, type }) => ({
    backgroundColor:
      type === "success"
        ? theme.palette.success.light
        : type === "error"
        ? theme.palette.error.light
        : type === "warning"
        ? theme.palette.warning.light
        : theme.palette.primary.light,
    color:
      type === "success"
        ? theme.palette.success.contrastText
        : type === "error"
        ? theme.palette.error.contrastText
        : type === "warning"
        ? theme.palette.warning.contrastText
        : theme.palette.primary.contrastText,
    padding: "0.6rem 0.2rem 0.6rem 1rem",
    borderRadius: "0.2rem",
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
  })
);
