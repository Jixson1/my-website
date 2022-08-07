import { useEffect } from "react";
import "./App.css";
import heart from "./heart.png";

function App() {
  useEffect(() => {
    const rotationSpeed = getComputedStyle(document.documentElement).getPropertyValue("--rotation-speed");
    console.log(rotationSpeed);
  }, []);

  // modify rotation speed
  function changeRotationSpeed(mod) {
    const currSpeed = getComputedStyle(document.documentElement).getPropertyValue("--rotation-speed");
    const parsed = parseFloat(currSpeed);
    const newSpeed = String(parsed * mod + "s");
    document.documentElement.style.setProperty("--rotation-speed", newSpeed);
  }

  // size change handler
  function handleOnSizeChange(e) {
    document.documentElement.style.setProperty("--size-logo", `${e.currentTarget.value}vmin`);
  }

  // handle image click
  function onIMGClick() {
    const currColor = getComputedStyle(document.documentElement).getPropertyValue("--background-color");
    if (currColor === "rgb(48, 48, 48)")
      document.documentElement.style.setProperty("--background-color", "rgb(84, 84, 84)");
    else
      document.documentElement.style.setProperty("--background-color", "rgb(48, 48, 48)");
  }

  return (
    <>
      <title>Jackson Buchmeyer</title>
      <div className="App">
        <header className="App-header">
          <p>
            <input type="range" name="size" min="0" max="100" defaultValue="40" onChange={handleOnSizeChange}></input>
          </p>
          <p onClick={onIMGClick}>
            <img src={heart} className="Heart-logo" alt="heart" />
          </p>
          <p>
            <button onClick={() => changeRotationSpeed(0.5)}>Increase Speed</button>
            <button onClick={() => changeRotationSpeed(2)}>Decrease Speed</button>
          </p>
        </header>
      </div>
    </>
  );
}

export default App;
