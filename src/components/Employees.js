import React from 'react';

  const Employees = (props) => {
   
    const employeeList = props.searchedEmployees.map((employee) => {
        return (

          // getting employees, but not searched employees.  must be something with state
          <img src={employee.picture.thunbnail}></img>
            
        
        // <div className="employee" key={searchedEmployee.login.uuid}>
        //   <div className="row">
        //     <div className="col">
        //       <div className="thumbnail">
        //           <img src={searchedEmployee.picture.thumbnail} alt={`${searchedEmployee.name.first} ${searchedEmployee.name.last}`} />
        //       </div>
        //           {`${searchedEmployee.name.first} ${searchedEmployee.name.last}`}   
        //     </div>
            
        //     <div className="col">{searchedEmployee.phone}</div>
        //     <div className="col">{searchedEmployee.email}</div>
        //   </div>
        // </div>
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

