// General
import Image from "next/image";

// CSS
import { SkillsWrapper } from "./Skills.styled";

const Skills = () => {
  return (
    <SkillsWrapper>
      <h2>
        I've been <span>learning</span>
      </h2>

      <div className="skills">
        <div className="skill">
          <Image src="/assets/html5.png" alt="HTML5" width={80} height={80} />
          <p>
            H<span>TML</span>5
          </p>
        </div>
        <div className="skill">
          <Image src="/assets/css3.png" alt="CSS3" width={80} height={80} />
          <p>
            C<span>SS</span>3
          </p>
        </div>
        <div className="skill">
          <Image
            src="/assets/javascript.png"
            alt="Javascript"
            width={80}
            height={80}
          />
          <p>
            J<span>avascrip</span>t
          </p>
        </div>
        <div className="skill">
          <Image src="/assets/react.png" alt="React" width={80} height={80} />
          <p>
            R<span>eac</span>t
          </p>
        </div>
        <div className="skill">
          <Image
            src="/assets/nextjs.png"
            alt="Next.js"
            width={80}
            height={80}
          />
          <p>
            N<span>ext.j</span>s
          </p>
        </div>
      </div>
    </SkillsWrapper>
  );
};

export default Skills;
