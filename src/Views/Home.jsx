import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import portrait from '../assets/portrait.jpg';

function Home() {

  const [count, setCount] = useState(-1);

  const location = useLocation();

  useEffect(() => {
    setCount(state => state + 1)
  }, [location])

  return (
    <div>
      <div className="">
        <h1 className="text-white text-5xl font-bold pl-5">
          Jackson Buchmeyer
          <p className="pt-10 text-xl text-violet-500">
            Developer
          </p>
          <p>
          {count}
        </p>
        </h1>

      </div>
    </div>
  )
}

export default Home;