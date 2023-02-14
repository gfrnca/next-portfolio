// General
import Typewriter from "typewriter-effect";

// CSS
import { HeroWrapper } from "./Hero.styled";

const Hero = () => {
  return (
    <HeroWrapper>
      <Typewriter
        options={{
          strings: [
            "Olá, meu nome é Gabriel França!",
            "Hello, my name is Gabriel França!",
            "Bonjour, je m'appelle Gabriel França!",
            "Buenos días, mi nombre es Gabriel França!",
          ],
          autoStart: true,
          loop: true,
          delay: 75,
          deleteSpeed: 2,
        }}
      />
    </HeroWrapper>
  );
};

export default Hero;
