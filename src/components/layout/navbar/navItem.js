import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
export class NavItem extends Component {
  render() {
    return (
      <Fragment>
        <ul className="navbar-nav">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="dropdown has_dropdown">
            <a
              href="# "
              className="dropdown-toggle"
              id="drop3"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Marketplace
            </a>
            <ul className="dropdown-menu" aria-labelledby="drop3">
              <li>
                <NavLink to="/all-listings-grid">Listing Grid</NavLink>
              </li>
            </ul>
          </li>
          <li className="dropdown has_dropdown">
            <a
              href="# "
              className="dropdown-toggle"
              id="drop4"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Community
            </a>
            <ul className="dropdown-menu" aria-labelledby="drop4">
              <li>
                <NavLink to="/all-categories">All Categories</NavLink>
              </li>
            </ul>
          </li>
          <li className="dropdown has_dropdown">
            <a
              className="dropdown-toggle"
              href="# "
              id="drop2"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Discussion Forum
            </a>
            <ul className="dropdown-menu" aria-labelledby="drop2">
              <li>
                <NavLink to="/author-profile">Author Profile</NavLink>
              </li>
            </ul>
          </li>
          <li className="dropdown has_dropdown">
            <a
              className="dropdown-toggle"
              href="# "
              id="drop2"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Resources
            </a>
            <ul className="dropdown-menu" aria-labelledby="drop2">
              <li>
                <NavLink to="/author-profile">Author Profile</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </Fragment>
    );
  }
}
