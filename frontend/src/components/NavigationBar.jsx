import {
  Avatar,
  Dropdown,
  DropdownHeader,
  Navbar,
  NavbarBrand,
  NavbarToggle,
} from "flowbite-react";

const NavigationBar = () => {
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          SecureAuth
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
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
      </div>
    </Navbar>
  );
};

export default NavigationBar;
