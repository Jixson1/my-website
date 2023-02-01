import React from 'react';
import { Link } from "react-router-dom";

function NavigationMenu(props) {
  return (
    <div>
      <div className="font-bold px-3 py-3 text-white">
        Menu
      </div>
      <ul>
        <li>
          <Link
            to="/"
            className="text-white px-3 py-3 border-t border-b block"
            onClick={props.closeMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-white px-3 py-3 border-b block"
            onClick={props.closeMenu}
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavigationMenu