import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return(
    <Nav variant="pills" defaultActiveKey="/">
      <Nav.Item>
        <Link to="/"><Nav.Link href="/" eventKey="/">Home</Nav.Link></Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/users"><Nav.Link href="/users" eventKey="/users">Users</Nav.Link></Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;