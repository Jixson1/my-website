import "./App.css";
import heart from "./heart.png";

function App() {

  // handle image click
  function onLogoClick() {
    console.log('Image clicked');
  }

  // component html export
  return (
    <>
      <title>Jackson Buchmeyer</title>
      <div className="App">
        <header className="Top-menu">
          <div onClick={onLogoClick} className="Heart-box">
            <img src={heart} className="Heart-logo" alt="heart" />
          </div>
        </header>
        <header className="App-header">

        </header>
      </div>
    </>
  );
}

export default App;
