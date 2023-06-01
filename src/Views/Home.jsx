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
    <div className="bg-zinc-700 fixed w-1/2 h-96 bottom-1/3 left-1/4 inline-block rounded-lg">
      <img src={portrait} alt="Me" className="duration-200 hover:scale-110 hover:ease-in-out hover:bg-button-highlight-color w-1/4 absolute top-1/4"></img>
      <div className="">
        <h1 className="text-white text-xl font-bold pl-5">
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