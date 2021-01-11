import React from 'react';



// function Employees (props) {
//   let employeeList;
//   let searchedEmployees = props.searchedEmployees;
  
//   function handleDisplay(searchedEmployees) {
//     if (searchedEmployees.length > 0) {
//       employeeList = searchedEmployees;
//     } else {
//       employeeList = props.employees;
//     }
//     return employeeList;
//   }

    // handleDisplay();
  const Employees = (props) => {
    console.log(props);
    const employeeList = props.searchedEmployees.map((employee) => {
        return (
        <div className="employee" key={employee.login.uuid}>
          <div className="row">
            <div className="col">
              <div className="thumbnail">
                  <img src={employee.picture.thumbnail} alt={`${employee.name.first} ${employee.name.last}`} />
              </div>
                  {`${employee.name.first} ${employee.name.last}`}   
            </div>
            
            <div className="col">{employee.phone}</div>
            <div className="col">{employee.email}</div>
          </div>
        </div>
      )
    });

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

