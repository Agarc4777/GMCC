  import React from "react";
// import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <h1 class="navbar-brand">Schertz Car Care Center</h1>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/service">Services</a>
            </li>
            
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/pricing">Pricing</a>
            </li>
            
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/about-us">About Us</a>
            </li>

            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/specials">Specials</a>
            </li>

            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/contact-us">Contact Us</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>
  )};

export default Navbar;