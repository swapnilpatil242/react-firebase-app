import React, { Component } from 'react';
import './Users.css';
import UsersTable from './usersTable/UsersTable';
import Axios from 'axios';
import Search from './Search';
import { Button } from 'react-bootstrap';
import FilterDateCalender from "./FilterDateCalender";

class Users extends Component {
  constructor(props) {
    super(props);
    this.timeout = null;

    this.state = {
      usersData: [],
      searchData: undefined,
      searchField: undefined,
      startDate: null
    }
    this.onChangeFilterDatehandle = this.onChangeFilterDatehandle.bind(this);
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
      searchData: undefined,
      startDate: undefined
    });
  }
  // date filter
  onChangeFilterDatehandle(date) {
    this.setState({
      startDate: date,
      searchData: date,
      searchField: 'date'
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
      // Search by input
      if (searcFilter !== undefined) {
        if (this.state.searchField === 'input') {
          const filteredUsersData = finalData.filter(users => {
            return users.userFullName.toLowerCase().indexOf(searcFilter.toLowerCase()) !== -1;
          });
          finalData = filteredUsersData;
        }
      }
      // checked the date field filter 
      if (this.state.searchField === 'date' && this.state.searchData !== undefined) {
        const filteredEmployee = finalData.filter(employee => {
          let recordDate = new Date(employee.birthDate);
          return recordDate.toDateString().indexOf(searcFilter.toDateString()) !== -1;
        });
        finalData = filteredEmployee;
      }
    }else{
      finalData = this.state.usersData;
    }
    
    return (
      <div className="Users">
        <div className="SearchBar">
          <Search onChange={this.onInputSearch} />
          <FilterDateCalender onChange={this.onChangeFilterDatehandle} selected={this.state.startDate} />
          <Button variant="outline-info ClearFilter" onClick={this.onClickClearFilter}>Clear filters</Button>
        </div>
        <div className="UsersTable">
          <UsersTable usersData={finalData} isItSearch={this.state.searchData ? true : false}/>
        </div>
      </div>
    );
  }
}

export default Users;