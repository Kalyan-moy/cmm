import Navbar from "@/components/Navbar";
import { useGetFormById } from "@/services/queries/forms.query";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

const ViewForm = () => {
  const params = useParams();
  const formId = params?.id ? +params.id : undefined;

  const { data } = useGetFormById(formId);

  console.log({ data });

  return (
    <Box>
      <Navbar />
    </Box>
  );
};

export default ViewForm;
