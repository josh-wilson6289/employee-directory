import { assertExpressionWrapper } from "@babel/types";
import React from "react";
import "./style.css";

function Container({ children }) {
  return (
    <div className="wrapper">
      { children }
    </div>
  );
}

export default Container;