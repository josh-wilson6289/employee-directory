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
    orderedUsers: [{}],
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

  render() {
  return (
    <div className="App">
      <div className="container">
        <Navbar term={this.state.term}/>
        <Header/>
        <Main employees={this.state.employees}/>
    </div>
    </div>
    );
  }
}

export default App;
