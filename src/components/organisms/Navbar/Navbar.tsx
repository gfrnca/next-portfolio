// General

// CSS
import { Container } from "@/src/styles/global";
import { NavbarWrapper } from "./Navbar.styled";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Container className="container">
        <div className="brand">
          <h1>
            gfrn<span>c</span>a
          </h1>
        </div>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
