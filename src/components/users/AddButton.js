import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const AddButton = () => {
  return (
    <Link to="/users/new"><Button variant="outline-info AddButton">Add New User</Button></Link>
  );
}

export default AddButton;