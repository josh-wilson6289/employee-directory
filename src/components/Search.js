import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Search extends React.Component {
  
  state = { term: '' };

  onSearchSubmit = event => {
    event.preventDefault();

    console.log("submitted");
  }
  render(){
  return (
    <div className="Search">
      
      <form className="d-flex">
      
      <input 
        className="form-control me-2" 
        type="search" placeholder="Search" 
        aria-label="Search"
        onChange={(event) => this.setState({ term: event.target.value })} 
      />

      <button 
        className="btn btn-outline-success" 
        value={this.state.term}
        onSubmit={this.onSearchSubmit}
        type="submit">Search
        </button>
      </form>
    </div>
    );
  }
}

export default Search;
