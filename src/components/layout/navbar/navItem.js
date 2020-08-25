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
            <NavLink to="/">Marketplace</NavLink>
          </li>
          <li className="dropdown has_dropdown">
            <NavLink to="/">Community</NavLink>
          </li>
          <li className="dropdown has_dropdown">
            <NavLink to="/">Discussion Forum</NavLink>
          </li>
          <li className="dropdown has_dropdown">
            <NavLink to="/">Resources</NavLink>
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
              More
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
