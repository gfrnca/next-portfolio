// General
import Link from "next/link";
import { useRouter } from "next/router";

// CSS
import { Container } from "@/src/styles/global";
import { NavbarWrapper } from "./Navbar.styled";

// Links
import { navLinks } from "../../../contants/index";

const Navbar = () => {
  const route = useRouter();

  console.log(route.pathname);

  return (
    <NavbarWrapper>
      <Container className="container">
        <div className="brand">
          <h1>
            <span className="brackets">{"</"}</span>gfrn<strong>c</strong>a
            <span className="brackets">{">"}</span>
            <span>.</span>
          </h1>
        </div>

        <div className="nav-links">
          {navLinks.map((link) => (
            <Link
              className={route.pathname == link.href ? "active" : ""}
              href={`${link.href}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
