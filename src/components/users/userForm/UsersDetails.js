import React, { Component } from 'react';
import Axios from 'axios';

class UsersDetails extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      recordKey: props.match.params.id,
      emailAddress: null,
      userFullName: null,
      isActive: null,
      designation: null,
      birthDate: null,
      phoneNumber: null,
      setIsLoading: true
    })
  }
  // get user record details
  componentDidMount() {
    Axios.get(`${process.env.REACT_APP_FIREBASE_APP_URL}/Users/${this.state.recordKey}.json`)
      .then(response => {
        let userData = response.data;
        if (userData !== null) {
          this.setState({
            emailAddress: userData.emailAddress,
            userFullName: userData.userFullName,
            isActive: userData.isActive,
            designation: userData.designation,
            birthDate: userData.birthDate,
            phoneNumber: userData.phoneNumber,
            setIsLoading: false
          })
        }
      })
  }

  render() {
    let userDataRender = null
    if (this.state.setIsLoading) {
      userDataRender = <div className="UsersDetails">Loading...</div>
    } else {
      userDataRender = (
        <div className="UsersDetails">
          <h3>UsersDetails</h3>
          <ul>
            <li>Email: {this.state.emailAddress}</li>
            <li>First Name: {this.state.userFullName}</li>
            <li>Is Active: {this.state.isActive}</li>
            <li>Job Title: {this.state.designation}</li>
            <li>Join Date: {this.state.birthDate}</li>
            <li>Phone Number: {this.state.phoneNumber}</li>
          </ul>
        </div>
      )
    }
    return (
      userDataRender
    )
  }

}

export default UsersDetails;
