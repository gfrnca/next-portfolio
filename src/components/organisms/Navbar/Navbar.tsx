// General
import Link from "next/link";
import { useRouter } from "next/router";

// CSS
import { Container } from "@/src/styles/global";
import { NavbarWrapper } from "./Navbar.styled";

// Links
import { navLinks } from "../../../contants/index";
import Menu from "../Menu/Menu";
import { useState } from "react";

const Navbar = () => {
  const route = useRouter();
  const [menu, setMenu] = useState(false);

  const menuHandler = () => {
    menu
      ? (document.body.style.overflow = "initial")
      : (document.body.style.overflow = "hidden");
    menu ? setMenu(false) : setMenu(true);
  };

  return (
    <NavbarWrapper>
      <Container className="container">
        <Link href="/">
          <div className="brand">
            <h1>
              <span className="brackets">{"</"}</span>gfrn<strong>c</strong>a
              <span className="brackets">{">"}</span>
              <span>.</span>
            </h1>
          </div>
        </Link>

        <div className="nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              className={route.pathname == link.href ? "active" : ""}
              href={`${link.href}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="nav-menu">
          <div className="menu" onClick={menuHandler}>
            <div
              className="stripe"
              style={
                menu
                  ? { transform: "rotate(135deg)", position: "absolute" }
                  : {}
              }
            />
            <div className="stripe" style={menu ? { display: "none" } : {}} />
            <div
              className="stripe"
              style={
                menu ? { transform: "rotate(45deg)", position: "absolute" } : {}
              }
            />
          </div>
        </div>
      </Container>
      {menu && <Menu setMenu={setMenu} />}
    </NavbarWrapper>
  );
};

export default Navbar;
