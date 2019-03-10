import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

let FilterDateCalender = ({ onChange, selected }) => {
  return (
    <DatePicker onChange={onChange} selected={selected} className="FilterCalender FilterDateCal" placeholderText="DOB(mm/dd/yyyy)" />
  );
}

export default FilterDateCalender;