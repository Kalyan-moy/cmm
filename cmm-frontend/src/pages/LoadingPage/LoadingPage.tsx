import Lottie from "lottie-react";
import Loader from "../../assets/lottie/loader.json";
import { Container } from "./styles";

const LoadingPage = () => {
  return (
    <Container>
      <Lottie animationData={Loader} loop />
    </Container>
  );
};

export default LoadingPage;
