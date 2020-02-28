import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <h1 className="site-title">
        Student Kennels
        <br />
        <small>Loving care when you're not there.</small>
      </h1>
      <nav>
        <ul className="container">
          <li>
            <NavLink  activeClassName="selected" className="nav-link"activeStyle={{
    fontWeight: "bold",
    color: "midnightblue"
  }} to="/ ">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink  activeClassName="selected" className="nav-link"activeStyle={{
    fontWeight: "bold",
    color: "midnightblue"
  }} to="/animals">
              Animals
            </NavLink>
          </li>
          <li>
          <NavLink  activeClassName="selected" className="nav-link" activeStyle={{
    fontWeight: "bold",
    color: "midnightblue"
  }} to="/locations">
           Locations
          </NavLink>
          </li>
          <li>
          <NavLink  activeClassName="selected" className="nav-link" activeStyle={{
    fontWeight: "bold",
    color: "midnightblue"
  }} to="/owners">
            Owners
          </NavLink>
          </li>

          <li>
              <NavLink  activeClassName="selected" className = "nav-link" activeStyle={{
    fontWeight: "bold",
    color: "midnightblue"
  }} to="/employees">
              Employees
              </NavLink>
              </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(NavBar);
