import React, { Component } from 'react';
import './Users.css';
import UsersTable from './usersTable/UsersTable';
import Axios from 'axios';
import Search from './Search';
import { Button } from 'react-bootstrap';

class Users extends Component {
  constructor(props) {
    super(props);
    this.timeout = null;

    this.state = {
      usersData: [],
      searchData: undefined,
      searchField: undefined,
    }
    this.onInputSearch = this.onInputSearch.bind(this);
    this.onClickClearFilter = this.onClickClearFilter.bind(this);
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
  // input search form users tables
  onInputSearch (e) {
    // clearTimeout(this.timeout);
    let searchText = e.target.value;
    /* 
      // The SyntheticEvent is pooled. This means that the SyntheticEvent object will be reused 
      // and all properties will be nullified after the event callback has been invoked. 
      // This is for performance reasons. As such, you cannot access the event in an asynchronous way.
    */
    this.timeout = setTimeout(() => {
      this.setState({
        searchData: searchText,
        searchField: 'input'
      });
    }, 500)
  }
  // clear filter
  onClickClearFilter() {
    this.setState({
      searchData: undefined
    });
  }

  render() {
    let finalData = []
    let tempUsersData = this.state.usersData;
    let searcFilter = this.state.searchData;

    //object key hash to array
    if (tempUsersData) {
      Object.keys(tempUsersData).forEach(function (key) {
        tempUsersData[key]["recordKey"] = key;
        finalData.push(tempUsersData[key]);
      });      

      if (searcFilter !== undefined) {
        if (this.state.searchField === 'input') {
          const filteredUsersData = finalData.filter(users => {
            return users.userFullName.toLowerCase().indexOf(searcFilter.toLowerCase()) !== -1;
          });
          finalData = filteredUsersData;
        }
      }
    }else{
      finalData = this.state.usersData;
    }

    return (
      <div className="Users">
        <div className="SearchBar">
          <Search onChange={this.onInputSearch} />
          <Button variant="outline-info ClearFilter" onClick={this.onClickClearFilter}>Clear filters</Button>
        </div>
        <div className="UsersTable">
          <UsersTable usersData={finalData} />
        </div>
      </div>
    );
  }
}

export default Users;