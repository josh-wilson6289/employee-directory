import React from "react";
import './App.css';
import Header from "./components/Header.js";
import Navbar from "./components/NavBar.js";
import Main from "./components/Main.js";
import API from "./utils/API";

class App extends React.Component {

  state = {
    employees: [],
    order: "descend",
    searchedEmployees: [{}],
    term: ''
  }

  onSearchSubmit = event => {
    event.preventDefault();

    console.log("submitted");
  }

  componentDidMount() {
    API.returnEmployees()
      .then(res => {
        this.setState({
          employees: res.data.results
        });
      });
  };

  handleSearch = event => {
    console.log(event.target.value);
    const search = event.target.value;
    const searchedEmployees = this.state.employees.filter(item => {
      let values = Object.values(item)
      .join("")
      .toLowerCase();
      return values.indexOf(search.toLowerCase()) !== -1;
    });
    this.setState({ searchedEmployees: searchedEmployees })
  }

  render() {
  return (
    <div className="App">
      <div className="container">
        <Navbar handleSearch={this.handleSearch}/>
        <Header/>
        <Main employees={this.state.employees} 
              order={this.state.order} 
              orderedUsers={this.state.orderedUsers} 
              term={this.state.term}
        />
      </div>
    </div>
    );
  }
}

export default App;
