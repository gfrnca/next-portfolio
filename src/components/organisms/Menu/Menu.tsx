// CSS
import { navLinks } from "@/src/contants";
import { Container } from "@/src/styles/global";
import { MenuWrapper } from "./Menu.styled";

const Menu = () => {
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
            <li key={link.id}>{link.name}</li>
          ))}
        </ul>
      </Container>
    </MenuWrapper>
  );
};

export default Menu;
