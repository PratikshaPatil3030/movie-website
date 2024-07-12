"use client";
import React, { useEffect } from "react";
import Image from "next/image";


export default function NavBar() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow p-3 mb-5 rounded" style={{backgroundColor:'#e3f2fd'}}>
  <div className="container-fluid">
  <a className="navbar-brand" href="/"><Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbLaVdwycz-_tNhLi0mG2duPLqeJI-b7z8pA&s"} alt={"logo"} width={60} height={50} /> Movies</a>
  
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Movies</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/movies">All Movies</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/About">AboutUs</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
  )
}





