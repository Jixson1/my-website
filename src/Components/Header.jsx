import React from 'react';
import Navigation from './Navigation';

function Header() {
  return (
    <header className="bg-header-background">
      <div className="object-fill">
        <Navigation />
      </div>
    </header>
  );
}

export default Header;