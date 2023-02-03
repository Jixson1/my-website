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
    <div>
      <Router>

        <Header />

        <div className="flex justify-center p-10">
          <img src={portrait} alt="Me" className="duration-200 hover:scale-110 hover:ease-in-out hover:bg-button-highlight-color w-96"></img>
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
