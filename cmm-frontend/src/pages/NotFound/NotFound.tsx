import Lottie from "lottie-react";
import notFoundAnimation from "../../assets/lottie/not-found.json";
import { Container, Content } from "./styles";

const NotFound = () => {
  return (
    <Container>
      <Content>
        <Lottie animationData={notFoundAnimation} loop />
      </Content>
    </Container>
  );
};

export default NotFound;
