import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand bg-dark flex-column flex-sm-row justify-content-between">
          <Link className="navbar-brand btn btn-outline-info mr-0 mt-1 mb-1 border-top-0 border-right-0 border-left-0" to="/">MATT MELEEN</Link>
          <div className="navbar-nav-scroll">
            <ul className="navbar-nav flex-row nav-pills">
              <li className="nav-item">
                <NavLink activeClassName="nav-link active bg-transparent border-primary border-bottom" className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="nav-link active bg-transparent border-primary border-bottom" className="nav-link" to="/portfolio">Portfolio</NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink activeClassName="nav-link active bg-transparent border-primary border-bottom" className="nav-link" to="/contact">Contact</NavLink>
              </li> */}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
