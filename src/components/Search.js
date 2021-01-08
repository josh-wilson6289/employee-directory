import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Search ({ handleSearch }) {
  


  return (
    <div className="Search">
      
      <form className="d-flex">
      
      <input 
        className="form-control me-2" 
        type="search" placeholder="Search" 
        aria-label="Search"
        onChange={event => handleSearch(event)} 
      />

      <button 
        className="btn btn-outline-success" 
        // value={this.state.term}
        // onSubmit={this.onSearchSubmit}
        type="submit">Search
        </button>
      </form>
    </div>
    );
  
}

export default Search;
