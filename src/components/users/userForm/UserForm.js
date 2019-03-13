import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import './UserForm.css';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: "",
      phoneNumber: "",
      userFullName: "",
      designation: '',
      isActive: false,
      isSubmitted: false
    }
    this.onSubmitUserData = this.onSubmitUserData.bind(this);
    this.onChangeUserFormInput = this.onChangeUserFormInput.bind(this);
  }

  onChangeUserFormInput(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmitUserData(event) {
    event.preventDefault();
    const { emailAddress, phoneNumber, userFullName, designation, isActive } = this.state;
    // Call post API to submit data
    Axios.post(`${process.env.REACT_APP_FIREBASE_APP_URL}Users.json`, { emailAddress, phoneNumber, userFullName, designation, isActive })
      .then(response => {
        this.setState({ isSubmitted: true })
      })
  }

  render() {
    //
    if (this.state.isSubmitted) {
      return (
        <Redirect to="/users" />
      )
    }
    else {
      return (
        <div className="UserForm">
          <form onSubmit={this.onSubmitUserData}>
            <div className="InputFields">
              First name :
              <input type="text" name="userFullName" value={this.state.userFullName} onChange={this.onChangeUserFormInput} />
            </div>
            <div className="InputFields">
              Email :
              <input type="text" name="emailAddress" value={this.state.emailAddress} onChange={this.onChangeUserFormInput} />
            </div>
            <div className="InputFields">
              Phone :
              <input type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.onChangeUserFormInput} />
            </div>
            <div className="InputFields">
              Job Title :
              <input type="text" name="designation" value={this.state.designation} onChange={this.onChangeUserFormInput} />
            </div>
            <div>
              <span>Is Active :</span>
              <input name="isActive" type="checkbox" checked={this.state.isActive} onChange={this.onChangeUserFormInput} />
            </div>
            <div className="InputFields">
              <Button variant="outline-info" type="submit">Submit data</Button>
            </div>
          </form>
        </div>
      )
    }
  }
}

export default UserForm;