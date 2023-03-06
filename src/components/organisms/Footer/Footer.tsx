// General
import Image from "next/image";
import Link from "next/link";

// Components
import { Container } from "@/src/styles/global";
import { FooterWrapper } from "./Footer.styled";

// Links
import { navLinks } from "@/src/contants";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container className="container">
        <div className="links">
          <ul>
            {navLinks.map((link) => (
              <Link key={link.id} href={link.href}>
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
      </Container>

      <div className="background">
        <Image
          src="/assets/footer-background.svg"
          alt="HTML5"
          width={800}
          height={800}
        />
      </div>
    </FooterWrapper>
  );
};

export default Footer;
