import React from 'react'
import './Nav.css'
function Nav() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-black text-white custom-navbar">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="/">Apni Gaadi</a>
  <div className="nav1">
  <ul className="nav justify-content-end">
  <li className="nav-item"  id="BookRide"> 
    <a className="btn btn-outline" href="/">Book Ride</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">About Us</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">Team</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">Contact</a>
  </li>
</ul>
  </div>
    <div className="dropdown  show float-end">
  <a className="btn btn-dark bg-black my-custom-btn" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <span className="material-symbols-outlined">
menu
</span>
  </a>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a className="dropdown-item rounded-top align-middle" href="/">About Us</a>
    <a className="dropdown-item" href="/">Team</a>
    <a className="dropdown-item rounded-bottom align-middle" href="/">Contact</a>
  </div>
</div>
  </div>
</nav>
    </>
  )
}

export default Nav
