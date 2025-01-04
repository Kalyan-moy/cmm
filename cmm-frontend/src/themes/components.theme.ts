import { Components, Theme } from "@mui/material";

const components: Components<Omit<Theme, "components">> = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
      },
    },
    defaultProps: {
      variant: "contained",
    },
  },
  MuiTextField: {
    defaultProps: {
      size: "small",
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderWidth: "1px",
        },
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      input: {
        fontSize: "0.875rem;",
      },
    },
  },
  MuiIconButton: {
    defaultProps: {
      size: "small",
    },
  },
};

export default components;
