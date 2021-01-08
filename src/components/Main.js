import React from "react";
import Employees from "./Employees";


function Main(props) {
  return (
    <Employees employees={props.employees} order={props.order} term={props.term}/>
  );
}

export default Main;