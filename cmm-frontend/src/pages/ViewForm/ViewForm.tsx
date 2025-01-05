import { useGetFormById } from "@/services/queries/forms.query";
import { useParams } from "react-router-dom";

const ViewForm = () => {
  const params = useParams();
  const formId = params?.id ? +params.id : undefined;

  const { data, isLoading } = useGetFormById(formId);

  console.log({ data });

  return <div>ViewForm</div>;
};

export default ViewForm;
