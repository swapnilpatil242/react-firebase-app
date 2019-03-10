import React from 'react';

let Search = ({ onChange }) => {
  return (
    <input type='text' className="EmpSearch" onChange={onChange} placeholder="Search by name"></input>
  );
}

export default Search;