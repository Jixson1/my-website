import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCircleUser, faPhone } from '@fortawesome/free-solid-svg-icons';
import heart from '../assets/favicon.png';

function NavigationMenu(props) {
  return (
    <div>
      <button className="hover:duration-100 hover:scale-110 hover:bg-zinc-800 p-2" onClick={props.closeMenu}>
        <img src={heart} alt="Menu" className="w-14 hover:scale-110"></img>
      </button>
      <ul className="text-center">
        <li>
          <Link
            to="/"
            className="hover:duration-100 hover:scale-110 hover:bg-zinc-800 px-3 py-3 block text-violet-600 hover:text-violet-700"
            onClick={props.closeMenu}
          >
            <FontAwesomeIcon
            icon={faHouse}
            className="text-3xl"
            />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavigationMenu