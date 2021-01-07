import React, { Component } from 'react';
import API from "../utils/API";


export class Employees extends Component {

  state = {
    employees: [],
    order: "descend",
    orderedUsers: [{}]
  }

  componentDidMount() {
    API.returnEmployees()
      .then(res => {
        this.setState({
          employees: res.data.results
        });
      });
  };

  render() {

    const employeeList = this.state.employees.map((employee) => {
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
}

export default Employees;

