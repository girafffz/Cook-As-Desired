import React from "react";
import { NavLink } from "react-router-dom";

import SearchBar from "./SearchBar";
import logo from "../images/cook_as_desired_logo.png";

// contains the title

const NavBar = (props) => {
  return (
    <>
      <div className="navbar-top"></div>
      <nav className="navbar navbar-expand-lg bg-white sticky-top navbar-light shadow-sm">
        <div className="container">
          <NavLink
            to="/home"
            onClick={() => props.setSearchHasStart(false)}
            searchHasStart={props.searchHasStart}
            setSearchHasStart={props.setSearchHasStart}
          >
            <img className="logo" src={logo} alt="COOK AS DESIRED" />
          </NavLink>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-4">
              <NavLink
                to="/home"
                onClick={() => props.setSearchHasStart(false)}
                searchHasStart={props.searchHasStart}
                setSearchHasStart={props.setSearchHasStart}
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item mx-4">
              <NavLink
                to="/favourites"
                onClick={() => props.setSearchHasStart(false)}
                searchHasStart={props.searchHasStart}
                setSearchHasStart={props.setSearchHasStart}
              >
                FAVOURITES
              </NavLink>
            </li>
          </ul>
          <SearchBar
            getRecipes={props.getRecipes}
            onClick={() => {
              props.setSearchHasStart(true);
            }}
            searchHasStart={props.searchHasStart}
          />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
