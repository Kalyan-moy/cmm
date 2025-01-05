import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  InputAdornment,
  TextField,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import {
  Lock,
  Visibility,
  VisibilityOff,
  Person,
  Email,
} from "@mui/icons-material";
import CMMLogo from "@/assets/images/cmm.png";
import { Container, StyledBackgroundImage, Card, ImageLogo } from "./styles";
import Button from "../../components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/providers/Toast.provider";
import { useNavigate } from "react-router-dom";
import { ISignupInput, signupSchema } from "./schema";
import { useSignup } from "@/services/mutations/auth.mutation";
import { _getTokenData, _setToken } from "@/utils/auth.utils";
import { useSetRecoilState } from "recoil";
import userAtom from "@/recoil/user.atom";

const Signup = () => {
  const theme = useTheme();
  const Toast = useToast();
  const navigate = useNavigate();
  const [visiblePassword, setVisiblePassword] = useState(false);
  const setUser = useSetRecoilState(userAtom);
  const { mutateAsync: signupFn, isLoading } = useSignup();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ISignupInput>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
  });

  const handleLSignup = async (data: ISignupInput) => {
    try {
      const { token, user } = await signupFn({ data });

      if (token) {
        setUser({ id: user.id, username: user.username, email: user.email });
        _setToken(token);
        reset();
        Toast.success({
          title: "Logged in",
          message: "You have successfully logged in.",
        });
        navigate("/");
      } else {
        return Toast.error({
          title: "Signup failed",
          message: "Something went wrong, please try again later.",
        });
      }
    } catch (error) {
      console.error("Error while signup : ", error);
      return Toast.error({
        title: "Signup failed",
        message: "Something went wrong, please try again later.",
      });
    }
  };

  return (
    <Container>
      <StyledBackgroundImage />
      <Card>
        <form onSubmit={handleSubmit(handleLSignup)}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <ImageLogo src={CMMLogo} />
            <TextField
              fullWidth
              placeholder="Username"
              error={!!errors?.username}
              helperText={errors?.username?.message || ""}
              {...register("username")}
              autoComplete="new-username"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person fontSize="small" color="disabled" />
                    </InputAdornment>
                  ),
                },
              }}
            />
            <TextField
              fullWidth
              placeholder="Email"
              error={!!errors?.email}
              helperText={errors?.email?.message || ""}
              {...register("email")}
              autoComplete="new-email"
              sx={{ mt: 2 }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email fontSize="small" color="disabled" />
                    </InputAdornment>
                  ),
                },
              }}
            />
            <TextField
              fullWidth
              placeholder="Password"
              type={visiblePassword ? "text" : "password"}
              error={!!errors?.password}
              helperText={errors?.password?.message || ""}
              {...register("password")}
              autoComplete="new-password"
              sx={{ my: 2 }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock fontSize="small" color="disabled" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setVisiblePassword((prev) => !prev)}
                      >
                        {visiblePassword ? (
                          <Visibility fontSize="small" color="disabled" />
                        ) : (
                          <VisibilityOff fontSize="small" color="disabled" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
            <Button fullWidth type="submit" loading={isLoading}>
              Signup
            </Button>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                mt: 2,
              }}
            >
              <Typography fontSize={"0.8rem"}>
                Already have an account ?
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.primary.main,
                  cursor: "pointer",
                  fontSize: "0.8rem",
                }}
                onClick={() => navigate("/login")}
              >
                Log in.
              </Typography>
            </Box>
          </Box>
        </form>
      </Card>
    </Container>
  );
};

export default Signup;
