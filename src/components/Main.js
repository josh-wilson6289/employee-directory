import React from "react";
import Employees from "./Employees";


function Main(props) {
  return (
    <Employees employees={props.employees}/>
  );
}

export default Main;