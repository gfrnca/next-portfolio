// CSS
import { Container } from "@/src/styles/global";
import { HomePageWrapper } from "./HomePage.styled";

// Components
import Hero from "../../organisms/HomePage/Hero/Hero";

const HomePage = () => {
  return (
    <Container>
      <HomePageWrapper>
        <Hero />
      </HomePageWrapper>
    </Container>
  );
};

export default HomePage;
