import React, { Component } from 'react';



function Employees (props) {

    const employeeList = props.employees.map((employee) => {
      return (
        <div className="row">
        <div className="col">
          <div className="thumbnail">
            <img src={employee.picture.thumbnail} alt="employee photo"/>
          </div>
          {`${employee.name.first} ${employee.name.last}`}   
          </div>
        <div className="col">{employee.phone}</div>
        <div className="col">{employee.email}</div>
        </div>
      )
        
    })


    return (
      <div className="container">
        <div className="row">
          <div className="col">Name</div>
          <div className="col">Phone</div>
          <div className="col">Email</div>
        </div>
        <br /> <br />
        {employeeList}
      </div>
    );
  
}

export default Employees;

