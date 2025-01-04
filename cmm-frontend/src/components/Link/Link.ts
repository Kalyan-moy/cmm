import { styled } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Link = styled(RouterLink)(() => ({
  textDecoration: "none",
  color: "unset",
}));

export default Link;
