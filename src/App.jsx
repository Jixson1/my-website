import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="absolute bottom-0 left-0 h-full w-full bg-zinc-900 inline-flex">
      
      <Router>

        <div className="relative">
          <Routes>
          </Routes>
        </div>

      </Router>

    </div>
  );
}

export default App;
