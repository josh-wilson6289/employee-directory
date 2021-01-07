import React from "react";
import Search from "./Search";

function Navbar() {
  return(
<nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">Employee Directory</a>
    <Search/>
  </div>
</nav>
  )
}

export default Navbar;