import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Axios from 'axios';
import './UserForm';
import { Redirect } from 'react-router-dom';

class UsersEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      recordKey: props.match.params.id,
      emailAddress: "",
      phoneNumber: "",
      userFullName: "",
      designation: '',
      birthDate: '',
      isActive: '',
      setIsLoading: true,
      isUpdated: false
    })
    this.onSubmitEditedUserData = this.onSubmitEditedUserData.bind(this);
    this.onChangeUserEditFormInput = this.onChangeUserEditFormInput.bind(this);
  }
  // get User data
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

  onChangeUserEditFormInput(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmitEditedUserData(event) {
    event.preventDefault();
    const { emailAddress, userFullName, isActive, designation, birthDate, phoneNumber } = this.state;
    // Call post API to submit data
    Axios.patch(`${process.env.REACT_APP_FIREBASE_APP_URL}/Users/${this.state.recordKey}.json`, { "emailAddress": `${emailAddress}`, "phoneNumber": `${phoneNumber}`,  "userFullName": `${userFullName}`, "designation": `${designation}`, "isActive": `${isActive}`, "birthDate": `${birthDate}` })
      .then(response => {
        this.setState({ isUpdated: true })
      })
  }

  render() {
    if (this.state.isUpdated) {
      return (
        <Redirect to="/users" />
      )
    }
    else {
      return (
        <div className="UsersEditForm">
          <form onSubmit={this.onSubmitEditedUserData}>
            <div className="InputFields">
              Full name :
              <input type="text" name="userFullName" value={this.state.userFullName} onChange={this.onChangeUserEditFormInput} />
            </div>
            <div className="InputFields">
              Email :
              <input type="text" name="emailAddress" value={this.state.emailAddress} onChange={this.onChangeUserEditFormInput} />
            </div>
            <div className="InputFields">
              Phone :
              <input type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.onChangeUserEditFormInput} />
            </div>
            <div className="InputFields">
              Designation :
              <input type="text" name="designation" value={this.state.designation} onChange={this.onChangeUserEditFormInput} />
            </div>
            <div>
              <span>Is Active :</span>
              <input name="isActive" type="checkbox" checked={this.state.isActive} onChange={this.onChangeUserEditFormInput} />
            </div>
            <div>
              <span>Join Date :</span>
              <input type="text" name="birthDate" value={this.state.birthDate} onChange={this.onChangeUserEditFormInput} />
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

export default UsersEditForm;