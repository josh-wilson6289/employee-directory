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
      </form>
    </div>
    );
  
}

export default Search;
