import Lottie from "lottie-react";
import Loader from "../../assets/lottie/loader.json";
import { Container } from "./styles";

const LoadingPage = () => {
  return (
    <Container>
      <Lottie animationData={Loader} loop style={{ width: "10vw" }} />
    </Container>
  );
};

export default LoadingPage;
