import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Views/Home';
import About from './Views/About';
import Contact from './Views/Contact';

function App() {
  return (
    <div>
      <Router>

        <Header />

        <div className="p-3">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>

      </Router>
    </div>
  );
}

export default App;
