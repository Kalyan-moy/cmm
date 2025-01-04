import { Box } from "@mui/material";
import { Container, Item, Label } from "./styles";

import DataIcon from "@/assets/icons/data_source.svg?react";
import DocIcon from "@/assets/icons/doc.svg?react";
import Link from "@/components/Link";

const DevDashboard = () => {
  return (
    <Container>
      <Link to="/fields">
        <Item>
          <Box sx={{ height: "60px" }}>
            <DataIcon height={60} width={60} />
          </Box>
          <Label variant="h6">Fields</Label>
        </Item>
      </Link>
      <Link to="/forms">
        <Item>
          <Box sx={{ height: "60px" }}>
            <DocIcon height={50} width={50} />
          </Box>
          <Label variant="h6">Forms</Label>
        </Item>
      </Link>
    </Container>
  );
};

export default DevDashboard;
