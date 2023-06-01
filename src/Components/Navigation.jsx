import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTransition, animated } from '@react-spring/web';
import NavigationMenu from './NavigationMenu';
import heart from '../assets/favicon.png';

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  // menu and mask transition dependent on showMenu state
  const maskTransitions = useTransition(showMenu, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: .25 },
    leave: { opacity: 0 },
  });

  const menuTransitions = useTransition(showMenu, {
    from: { opacity: 0, transform: 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(-100%)' },
  });

  // handle menu click (either from clicking on the icon or the mask)
  const handleMenu = () => {
    setShowMenu(state => !state);
  }

  return (
    <nav>
      <button className="duration-100 hover:scale-110 hover:bg-zinc-800 p-1" onClick={handleMenu}>
        <img src={heart} alt="Menu" className="w-14"></img>
      </button>

      {maskTransitions((style, item) => (
        item ?
          <animated.div
            style={style}
            className=" bg-black fixed top-0 left-0 w-full h-full"
            onClick={handleMenu}
          >
          </animated.div>
          : ''
      ))}

      {menuTransitions((style, item) => (
        item ?
          <animated.div
            style={style}
            className=" top-0 left-0 w-fit h-full z-50 shadow fixed bg-zinc-700"
          >
            <NavigationMenu closeMenu={handleMenu}/>
          </animated.div>
          : ''
      ))}
      
    </nav>
  );
}

export default Navigation;