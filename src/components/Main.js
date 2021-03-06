import React from "react";
import Employees from "./Employees";


function Main(props) {
  return (
    <Employees employees={props.employees} order={props.order} searchedEmployees={props.searchedEmployees} handleSearch={props.handleSearch}/>
  );
}

export default Main;