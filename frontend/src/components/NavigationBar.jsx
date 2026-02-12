import {
  Avatar,
  Button,
  Dropdown,
  DropdownHeader,
  Navbar,
  NavbarBrand,
  NavbarToggle,
} from "flowbite-react";
import { SiFsecure } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const isAuthenticated = false;

  const navigate = useNavigate();
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="https://flowbite-react.com">
        <SiFsecure className="text-2xl mr-2 dark:text-white" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          SecureAuth
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        {isAuthenticated ? (
          <>
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              }
            >
              <DropdownHeader>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </DropdownHeader>
            </Dropdown>
            <NavbarToggle />
          </>
        ) : (
          <Button onClick={() => navigate("/login")} color="cyan">
            Login
          </Button>
        )}
      </div>
    </Navbar>
  );
};

export default NavigationBar;
