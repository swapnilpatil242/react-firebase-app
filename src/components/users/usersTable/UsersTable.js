import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import "./UsersTable.css";

class UsersTable extends Component {

  render() {
    const usersData = this.props.usersData;
    let tableRow = null;
    
    if (usersData === undefined || usersData === null || usersData.length === 0) {
      if (usersData == null || this.props.isItSearch) {
        tableRow = <tr><td colSpan="5" className="TextCenter">Data is empty</td></tr>
      }
      else {
        tableRow = <tr><td colSpan="5" className="TextCenter">Loading...</td></tr>
      }

    } else {
      tableRow = usersData.map((row, index) => {
        return (
          <tr key={index}>
            <td> {row.userFullName} </td>
            <td> {row.emailAddress} </td>
            <td> {row.birthDate} </td>
            <td> {row.designation} </td>
            <td> {row.gender} </td>
          </tr>
        );
      })
    }
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>DOB (mm/dd/yyyy)</th>
            <th>Designation</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>{tableRow}</tbody>
      </Table>
    );
  }
}

export default UsersTable;