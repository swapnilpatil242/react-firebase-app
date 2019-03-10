import React from 'react';

let Search = ({ onChange }) => {
  return (
    <input type='text' className="EmpSearch" onChange={onChange}></input>
  );
}

export default Search;