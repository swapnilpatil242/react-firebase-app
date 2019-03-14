import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import "./UsersTable.css";
import { Link } from "react-router-dom";
import Axios from 'axios';

class UsersTable extends Component {
  constructor(props) {
    super(props);
    this.onClickDeleteUser = this.onClickDeleteUser.bind(this);
  }
  
  onClickDeleteUser(event) {
    let recordKey = event.target.attributes.getNamedItem('data-record-key').value
    Axios.delete(`${process.env.REACT_APP_FIREBASE_APP_URL}/Users/${recordKey}.json`)
      .then(response => {
        this.props.getUserListAfterDelete()
      })
  }

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
            <td> <Link to={`/users/${row.recordKey}`} params={{ id: index, recordKey: row.recordKey }} >{row.userFullName}</Link></td>
            <td> {row.emailAddress} </td>
            <td> {row.birthDate} </td>
            <td> {row.designation} </td>
            <td> {row.gender} </td>
            <td className="AlignCenter"><Link to={`/users/${row.recordKey}/edit`} params={{ id: index, recordKey: row.recordKey }} > <i className="fa fa-pencil MousePointerSty" aria-hidden="true"></i> </Link></td>    
            <td className="AlignCenter"> <i className="fa fa-trash MousePointerSty" aria-hidden="true" data-record-key={row.recordKey} onClick={this.onClickDeleteUser}></i> </td>
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
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{tableRow}</tbody>
      </Table>
    );
  }
}

export default UsersTable;