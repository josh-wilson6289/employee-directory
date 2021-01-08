import React from "react";
import Search from "./Search";

function Navbar({ handleSearch }) {
  return(
<nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">Employee Directory</a>
    <Search handleSearch={handleSearch}/>
  </div>
</nav>
  )
}

export default Navbar;