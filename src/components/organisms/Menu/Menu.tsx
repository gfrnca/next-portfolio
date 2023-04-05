// General
import { useRouter } from "next/router";
import Link from "next/link";
import React, { Dispatch, FC, SetStateAction } from "react";

// CSS
import { Container } from "@/src/styles/global";
import { MenuWrapper } from "./Menu.styled";

// Links
import { navLinks } from "@/src/constants/navLinks";

interface Props {
  setMenu: Dispatch<SetStateAction<boolean>>;
}

const Menu: FC<Props> = (props: Props) => {
  const route = useRouter();

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <MenuWrapper>
      <Container>
        <div className="menu-title">
          <h2>
            Glad you're <span>here</span>
          </h2>
        </div>

        <ul>
          {navLinks.map((link) => (
            <Link onClick={closeMenu} key={link.id} href={link.href}>
              <li className={route.pathname == link.href ? "active" : ""}>
                {link.name}
              </li>
            </Link>
          ))}
        </ul>
      </Container>
    </MenuWrapper>
  );
};

export default Menu;
function setMenu(arg0: boolean) {
  throw new Error("Function not implemented.");
}
