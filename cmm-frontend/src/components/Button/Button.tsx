import React from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

interface IButtonProps extends ButtonProps {
  loading?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  loading = false,
  disabled,
  children,
  startIcon,
  ...props
}) => {
  return (
    <MuiButton
      {...props}
      disabled={loading || disabled}
      startIcon={
        loading ? <CircularProgress size={20} color="inherit" /> : startIcon
      }
    >
      {children}
    </MuiButton>
  );
};

export default Button;
