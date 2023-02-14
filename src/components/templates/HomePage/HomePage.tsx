// CSS
import { Container } from "@/src/styles/global";
import { HomePageWrapper } from "./HomePage.styled";

// Components
import Hero from "../../organisms/HomePage/Hero/Hero";

const HomePage = () => {
  return (
    <HomePageWrapper>
      <Container>
        <Hero></Hero>
      </Container>
    </HomePageWrapper>
  );
};

export default HomePage;
