import React from "react";
import Employees from "./Employees";


function Main(props) {
  return (
    <Employees employees={props.employees} order={props.order} orderedUsers={props.orderedUsers} term={props.term}/>
  );
}

export default Main;