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
import portrait from './assets/portrait.jpg';

function App() {
  return (
    <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-b from-zinc-900 to-violet-900 inline-flex">
      
      <Router>

        <Header />

        <div className="relative">
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
