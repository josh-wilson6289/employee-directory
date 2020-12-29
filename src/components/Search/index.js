import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Search() {
  return (
    <div className="Search">
      <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>  
      <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;
