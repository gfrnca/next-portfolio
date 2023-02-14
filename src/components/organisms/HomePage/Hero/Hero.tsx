// General
import Typewriter from "typewriter-effect";

// CSS
import { HeroWrapper } from "./Hero.styled";

const Hero = () => {
  return (
    <HeroWrapper>
      <div className="left">
        <Typewriter
          options={{
            strings: [
              "Hello, my name is <strong>Gabriel França</strong> !",
              "Olá, meu nome é <strong>Gabriel França</strong> !",
              "Bon jour, je m'appelle <strong>Gabriel França</strong> !",
              "Hola, mi nombre es <strong>Gabriel França</strong> !",
            ],
            autoStart: true,
            loop: true,
            delay: 95,
            deleteSpeed: 2,
          }}
        />
        <span className="quotes">"</span>
        <p>
          As a <strong>beginner front-end developer</strong>, I am passionate
          about learning how to create <strong>beautiful</strong> and{" "}
          <strong>functional</strong> digital experiences that engage and
          delight users. I am constantly exploring the world of web design and
          development, and I find myself <strong>fascinated</strong> by the
          endless possibilities that this field has to offer.
        </p>
      </div>
      <div className="right"></div>
    </HeroWrapper>
  );
};

export default Hero;
