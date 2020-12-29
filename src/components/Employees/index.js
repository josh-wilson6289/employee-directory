import React, { Component } from 'react'
import API from "../../utils/API";


export class Employees extends Component {

  state = {
    users: [{}],
    order: "descend",
    orderedUsers: [{}]
  }

  componentDidMount() {
    API.returnUsers()
      .then(res => {
        this.setState({
          users: res.data.results
        });
      });
  };

  render() {
    return (
      <div>
        <ul>
          <li>Each Employee Goes Here</li>
          <li>Using .map</li>
        </ul>
      </div>
    )
  }
}

export default Employees;

