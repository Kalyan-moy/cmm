import { createTheme } from "@mui/material/styles";
import palette from "./palette.theme";
import typography from "./typography.theme";
import components from "./components.theme";

export const muiTheme = createTheme({
  cssVariables: true,
  palette,
  typography,
  components,
});
