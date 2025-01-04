import { Box, styled } from "@mui/material";
import BackgroundImage from "../../assets/images/Loginwithbackground.svg?react";
import { _hexToRgba } from "@/utils/common.utils";

export const Container = styled(Box)(() => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
}));

export const StyledBackgroundImage = styled(BackgroundImage)(() => ({
  position: "absolute",
  transform: "rotateY(180deg)",
  opacity: 0.3,
}));

export const Card = styled(Box)(({ theme }) => ({
  width: "30rem",
  boxShadow:
    "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
  backgroundColor: _hexToRgba(theme.palette.common.white, 0.8),
  padding: "2rem 4rem",
  borderRadius: "0.5rem",
  opacity: 1,
  zIndex: 1,
}));

export const ImageLogo = styled("img")(() => ({
  height: "6.25rem",
  marginBottom: "2rem",
}));
