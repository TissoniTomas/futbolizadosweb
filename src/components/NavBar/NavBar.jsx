import logo from "../../assets/logo/logo.jpg";
import { Navbar, NavbarBrand, NavbarContainer } from "keep-react";

const NavbarPage = () => {
  return (
    <Navbar className="flex items-center justify-center  bg-gray-700">
      <NavbarContainer className="justify-center">
        <NavbarBrand>
          <img className="h-32" src={logo} alt="logo" />
        </NavbarBrand>
      </NavbarContainer>
    </Navbar>
  );
};

export default NavbarPage;
