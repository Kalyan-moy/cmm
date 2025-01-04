import { FC, ReactNode } from "react";
import {
  Box,
  IconButton,
  Snackbar as MuiSnackbar,
  Slide,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { Container } from "./styles";

export interface Toast {
  title?: string;
  message: string;
  type: "success" | "error" | "warning" | "info";
  startIcon?: ReactNode;
  sx?: SxProps<Theme>;
}

interface ISnackbarProps {
  toast: Toast;
  autoHideDuration: number;
  onClose: () => void;
}

const Snackbar: FC<ISnackbarProps> = ({ toast, autoHideDuration, onClose }) => {
  return (
    <MuiSnackbar
      open
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      onClose={onClose}
      TransitionComponent={Slide}
      autoHideDuration={autoHideDuration}
    >
      <Container type={toast.type} sx={{ ...toast.sx }}>
        {!!toast?.startIcon && toast.startIcon}
        <Box>
          {!!toast?.title && (
            <Typography variant="button" sx={{ textTransform: "none" }}>
              {toast.title}
            </Typography>
          )}
          <Typography variant="body2">{toast.message}</Typography>
        </Box>
        <IconButton onClick={onClose}>
          <Close fontSize="small" sx={{ color: "#ffff" }} />
        </IconButton>
      </Container>
    </MuiSnackbar>
  );
};

export default Snackbar;
