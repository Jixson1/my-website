import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

function About() {
  const [count, setCount] = useState(-1);

  const location = useLocation();

  useEffect(() => {
    setCount(state => state + 1)
  }, [location])
  
  return (
    <div>
        <h1 className="font-bold text-2xl mb-3 text-center text-white">About Me :) {count}</h1>
        
    </div>
  )
}

export default About;