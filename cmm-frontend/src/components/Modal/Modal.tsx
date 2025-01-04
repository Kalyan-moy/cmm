import * as React from "react";
import {
  Box,
  Typography,
  Modal as MuiModal,
  IconButton,
  Divider,
  SxProps,
  Theme,
} from "@mui/material";
import { ArrowBackRounded, CloseRounded } from "@mui/icons-material";
import { Container } from "./styles";

interface BasicModalProps {
  open: boolean;
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  onClose: () => void;
  onBack?: () => void;
  sx?: SxProps<Theme>;
}

const Modal: React.FC<BasicModalProps> = ({
  open,
  children,
  title,
  subtitle,
  sx = {},
  onClose,
  onBack,
}) => {
  return (
    <MuiModal
      open={open}
      onClose={onClose}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(2px)",
          },
        },
      }}
    >
      <Container sx={sx}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          pt={1}
          px={1}
        >
          <Box display="flex" alignItems="center">
            {onBack && (
              <IconButton onClick={onBack} size="small">
                <ArrowBackRounded fontSize="small" />
              </IconButton>
            )}
            {title && (
              <Typography
                variant="h6"
                fontSize="1rem"
                fontWeight={600}
                textTransform="none"
                ml={1}
              >
                {title}
              </Typography>
            )}
          </Box>
          <IconButton size="small" onClick={onClose}>
            <CloseRounded fontSize="small" />
          </IconButton>
        </Box>
        {subtitle && (
          <Typography variant="caption" ml={onBack ? 6 : 2} mr={6}>
            {subtitle}
          </Typography>
        )}
        <Divider sx={{ mt: 1 }} />
        <Box flex={1} px={3} py={3} sx={{ overflowY: "auto" }}>
          {children}
        </Box>
      </Container>
    </MuiModal>
  );
};

export default Modal;
