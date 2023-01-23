import * as React from "react";
import { NavLink } from "react-router-dom";

function NavList() {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="coins"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Coins
          </NavLink>
        </li>
        <li>
          <NavLink
            to="tasks"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Tasks
          </NavLink>
        </li>
        <li>
          <NavLink to="tasks">
            {({ isActive }) => (
              <span
                className={
                  isActive ? activeClassName : undefined
                }
              >
                Tasks
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavList;