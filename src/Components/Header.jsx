import React from 'react';
import Navigation from './Navigation';

function Header() {
  return (
    <header className="bg-zinc-700 w-1/2 h-16 fixed left-1/4 rounded-lg">
      <div>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;