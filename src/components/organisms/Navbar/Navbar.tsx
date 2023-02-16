// General
import Link from "next/link";

// CSS
import { Container } from "@/src/styles/global";
import { NavbarWrapper } from "./Navbar.styled";

// Links
import { navLinks } from "../../../contants/index";

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
          {navLinks.map((link) => (
            <Link href={"#"}>{link.name}</Link>
          ))}
        </div>
      </NavbarWrapper>
    </Container>
  );
};

export default Navbar;
