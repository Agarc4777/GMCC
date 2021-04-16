import React from "react";
import "../styles/Header.css";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="jumbotron header">
        <h1>
            Schertz Car Care Center
        </h1>
        <Navbar />
    </div>
  );
}

export default Header;