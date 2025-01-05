import { Outlet, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "@/components/Navbar";
import { Container } from "./styles";
import { useEffect } from "react";
import { _getTokenData } from "@/utils/auth.utils";
import { useToast } from "@/providers/Toast.provider";
import { useSetRecoilState } from "recoil";
import userAtom from "@/recoil/user.atom";

const RootLayout = () => {
  const Toast = useToast();
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userAtom);

  useEffect(() => {
    const data = _getTokenData();
    if (data?.username && data?.email && data?.id) {
      setUser({ id: data.id, username: data.username, email: data.email });
    } else {
      setUser({ id: 0, username: "", email: "" });
      Toast.warning({
        title: "Access denied!",
        message: "You are not authorized to access this page.",
      });
      navigate("/login");
    }
  }, []);
  return (
    <Container>
      <Navbar />
      <Box sx={{ flex: 1, overflowY: "auto" }}>
        <Outlet />
      </Box>
    </Container>
  );
};

export default RootLayout;
