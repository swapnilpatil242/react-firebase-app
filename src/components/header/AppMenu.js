import React from 'react'
import { DropdownButton, Dropdown} from 'react-bootstrap';

const AppMenu = () => {
  return(
    <DropdownButton alignRight className="AppMenu dropdown-menu-align-right">
      <Dropdown.Item href="#/action-1">User Profile</Dropdown.Item>
      <Dropdown.Item href="#/action-2">About Us</Dropdown.Item>
    </DropdownButton>
  );
}

export default AppMenu;