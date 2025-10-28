import {
  Navbar as FlowNavbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  NavbarLink,
  Button,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { menuData } from "../../../models/menu/menuData";
import { useNavbarPresenter } from "../../../presenters/navbar-presenter";

const Navbar = () => {
  const location = useLocation();
  const { isScrolled } = useNavbarPresenter();

  return (
    <nav
      className={`top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "fixed bg-white shadow-md" : "relative bg-white"
      }`}
    >
      <div className="w-full max-w-screen-xl mx-auto px-4 py-4">
        <FlowNavbar fluid rounded>
          <NavbarBrand as={Link} to="/">
            <img src="/assets/images/logo-dark.svg" className="h-6" alt="Logo Talk Up" />
          </NavbarBrand>

          <NavbarToggle />

          <NavbarCollapse>
            {menuData.map((item, index) => (
              <NavbarLink
                key={index}
                as={Link}
                to={item.path}
                active={location.pathname === item.path}
              >
                {item.name}
              </NavbarLink>
            ))}
            <Button as={Link} to="/login" color={'primary'} size="sm">
              Login
            </Button>
          </NavbarCollapse>
        </FlowNavbar>
      </div>
    </nav>
  );
};

export default Navbar;
