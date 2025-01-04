import {
  MenuItem as MuiMenuItem,
  IconButton as MuiIconButton,
  Typography,
  styled,
} from "@mui/material";

export const WelcomeMessage = styled(Typography)(({ theme }) => ({
  variants: "body2",
  margin: "0.5rem 2rem",
  color: theme.palette.text.secondary,
  fontStyle: "italic",
  textAlign: "center",
}));

export const MenuItem = styled(MuiMenuItem)(({ theme }) => ({
  color: theme.palette.primary.main,
  display: "flex",
  justifyContent: "center",
  fontSize: theme.typography.button.fontSize,
  textTransform: "none",
}));

export const IconButton = styled(MuiIconButton)(() => ({
  padding: 0,
  "&:hover": { backgroundColor: "transparent" },
}));
