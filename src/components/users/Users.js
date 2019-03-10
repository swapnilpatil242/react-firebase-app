import React, { Component } from 'react';
import './Users.css';
import UsersTable from './usersTable/UsersTable';
import Axios from 'axios';

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usersData: []
    }
  }

  componentDidMount() {
    Axios.get(`${process.env.REACT_APP_FIREBASE_APP_URL}/Users.json`)
      .then(response => {
        const usersResponse = response.data;
        this.setState({
          usersData: usersResponse
        })
      })
  }

  render() {
    let finalData = []
    let tempUsersData = this.state.usersData;
    //object key hash to array
    if (tempUsersData) {
      Object.keys(tempUsersData).forEach(function (key) {
        tempUsersData[key]["recordKey"] = key;
        finalData.push(tempUsersData[key]);
      });      
    }else{
      finalData = this.state.usersData;
    }

    return (
      <div className="Users">
        <div className="UsersTable">
          <UsersTable usersData={finalData} />
        </div>
      </div>
    );
  }
}

export default Users;