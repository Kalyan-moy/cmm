import { useState, forwardRef, MouseEvent, ForwardedRef, FC } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Slide, SlideProps } from "@mui/material";
import { AccountCircle, ExpandMoreRounded, Logout } from "@mui/icons-material";

import { MenuItem, WelcomeMessage, IconButton } from "./styles";

const CustomSlide = forwardRef(function CustomSlide(
  props: SlideProps,
  ref: ForwardedRef<unknown>
) {
  return <Slide {...props} ref={ref} direction="left" />;
});

const Profile: FC = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    return navigate("/login");
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <AccountCircle fontSize="large" />
        <ExpandMoreRounded />
      </IconButton>
      <Menu
        id="profile-menu"
        MenuListProps={{
          "aria-labelledby": "profile-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={CustomSlide}
      >
        <WelcomeMessage variant="body2">
          Hello Kalyanmoy &#128075;
        </WelcomeMessage>
        <MenuItem onClick={handleLogOut}>
          <Logout fontSize="small" sx={{ mr: 1 }} />
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default Profile;
