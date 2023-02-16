// General
import Typewriter from "typewriter-effect";
import Image from "next/image";

// CSS
import { HeroWrapper } from "./Hero.styled";

// Components
import Separator from "@/src/components/atoms/Separator/Separator";
import Skills from "../../Skills/Skills";

// Assets

const Hero = () => {
  return (
    <HeroWrapper>
      {/* BLOBS */}
      <div className="blobs">
        <svg
          className="blob one"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="rgba(0,0,0,0.0)"
            stroke="#8257e5"
            d="M63.4,-24.7C67.5,-8,46.1,12.9,21.6,31C-2.8,49,-30.2,64.1,-41.6,56.1C-53.1,48.1,-48.6,16.9,-38.9,-7.4C-29.3,-31.6,-14.7,-48.9,7.5,-51.4C29.7,-53.8,59.3,-41.4,63.4,-24.7Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          className="blob two"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="rgba(0,0,0,0.0)"
            stroke="#8257e5"
            d="M29.3,-14.8C33.7,4.1,30.1,20.3,14.3,35.5C-1.5,50.7,-29.5,64.9,-34.7,58.5C-40,52.2,-22.6,25.3,-13,-0.7C-3.4,-26.7,-1.7,-51.8,5.4,-53.5C12.4,-55.3,24.9,-33.7,29.3,-14.8Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          className="blob three"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="rgba(0,0,0,0.0)"
            stroke="#04d361"
            d="M22.9,-35C30.2,-26.2,37,-20.2,46.5,-10.5C56,-0.8,68.3,12.7,70.7,28.5C73.2,44.3,65.9,62.5,52.5,74.4C39.1,86.3,19.5,91.9,6.8,82.5C-5.9,73.1,-11.7,48.6,-26.3,37.1C-40.8,25.6,-64,27,-66.9,21.1C-69.7,15.2,-52.1,2,-44.7,-12.6C-37.3,-27.3,-40.3,-43.3,-34.5,-52.6C-28.8,-61.9,-14.4,-64.4,-3.3,-59.8C7.8,-55.3,15.6,-43.7,22.9,-35Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="hero">
        <div className="title">
          <Image
            src="./assets/wave.svg"
            alt="Picture of the author"
            width={30}
            height={30}
          />
          <Typewriter
            options={{
              strings: [
                "Hello, my name is <strong>Gabriel França</strong><span>!</span>",
                "Olá, meu nome é <strong>Gabriel França</strong><span>!</span>",
                "Bon jour, je m'appelle <strong>Gabriel França</strong><span>!</span>",
                "Hola, mi nombre es <strong>Gabriel França</strong><span>!</span>",
              ],
              autoStart: true,
              loop: true,
              delay: 95,
              deleteSpeed: 2,
            }}
          />
        </div>
        <span className="quotes">"</span>
        <p>
          As a <strong>beginner front-end developer</strong>, I am passionate
          about learning how to create <strong>beautiful</strong> and{" "}
          <strong>functional</strong> digital experiences that engage and
          delight users. I am constantly exploring the world of web design and
          development, and I find myself <strong>fascinated</strong> by the
          endless possibilities that this field has to offer<span>.</span>
        </p>
        <Separator />
      </div>
    </HeroWrapper>
  );
};

export default Hero;
