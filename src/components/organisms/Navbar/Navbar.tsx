// General
import Link from "next/link";

// CSS
import { Container } from "@/src/styles/global";
import { NavbarWrapper } from "./Navbar.styled";

const Navbar = () => {
  return (
    <Container className="container">
      <NavbarWrapper>
        <div className="brand">
          <h1>
            gfrn<span>c</span>a
          </h1>
        </div>

        <div className="nav-links">
          <Link href={"#"}>Projects</Link>
          <Link href={"#"}>Contact</Link>
        </div>
      </NavbarWrapper>
    </Container>
  );
};

export default Navbar;
