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
            <span className="brackets">{"</"}</span>gfrn<strong>c</strong>a
            <span className="brackets">{">"}</span>
            <span>.</span>
          </h1>
        </div>

        <div className="nav-links">
          <Link className="active" href={"#"}>
            About me
          </Link>
          <Link href={"#"}>Projects</Link>
          <Link href={"#"}>Contact</Link>
        </div>
      </NavbarWrapper>
    </Container>
  );
};

export default Navbar;
