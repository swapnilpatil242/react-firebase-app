import React from 'react';
import './Header.css'
import AppLogo from './AppLogo';
import UserProfile from './UserProfile';
import AppMenu from './AppMenu';
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="Header">
      <AppLogo />
      <NavBar />
      <div className="MenuAlignRight">
        <UserProfile />
        <AppMenu />
      </div>
    </div>
  );
}

export default Header;