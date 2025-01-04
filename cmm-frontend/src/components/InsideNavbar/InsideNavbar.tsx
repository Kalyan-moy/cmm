import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Box, IconButton, Typography } from "@mui/material";
import { ArrowBackRounded, AddRounded } from "@mui/icons-material";
import Button from "@/components/Button";

interface IInsideNavbarProps {
  title?: string;
  buttonLabel?: string;
  onAdd?: () => void;
}

const InsideNavbar: FC<IInsideNavbarProps> = ({
  title,
  buttonLabel,
  onAdd = () => {},
}) => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      height={"10vh"}
    >
      <Box>
        <IconButton size="medium" sx={{ mr: 1 }} onClick={() => navigate(-1)}>
          <ArrowBackRounded color="primary" />
        </IconButton>
        {title && (
          <Typography variant="button" color="primary" textTransform="none">
            {title}
          </Typography>
        )}
      </Box>
      <Box>
        {buttonLabel && (
          <Button variant="outlined" onClick={onAdd}>
            <AddRounded fontSize="small" />
            {buttonLabel}
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default InsideNavbar;
