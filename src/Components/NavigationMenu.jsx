import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCircleUser, faPhone } from '@fortawesome/free-solid-svg-icons';
import heart from '../assets/favicon.png';

function NavigationMenu(props) {
  return (
    <div>
      <button className="hover:duration-100 hover:scale-110 hover:bg-button-highlight-color p-2" onClick={props.closeMenu}>
        <img src={heart} alt="Menu" className="w-14 hover:scale-110"></img>
      </button>
      <ul className="text-center">
        <li>
          <Link
            to="/"
            className="hover:duration-100 hover:scale-110 hover:bg-button-highlight-color text-white px-3 py-3 block"
            onClick={props.closeMenu}
          >
            <FontAwesomeIcon
            icon={faHouse}
            className="text-3xl text-violet-500"
            />
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="hover:duration-100 hover:scale-110 hover:bg-button-highlight-color text-white px-3 py-3 block"
            onClick={props.closeMenu}
          >
            <FontAwesomeIcon
            icon={faCircleUser}
            className="text-3xl text-violet-500"
            />
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="hover:duration-100 hover:scale-110 hover:bg-button-highlight-color text-white px-3 py-3 block"
            onClick={props.closeMenu}
          >
            <FontAwesomeIcon
            icon={faPhone}
            className="text-3xl text-violet-500"
            />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavigationMenu