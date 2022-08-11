import "./App.css";
import Menu from "./Menu.jsx";
import nyanCat from "./images/nyan-cat.gif";

function App() {

  // implement cool intro logo spin animation thing (heart spins from center to top left)

  // component html export
  return (
    <>
      <title>Jackson Buchmeyer</title>
      <div className="App">
        <Menu />
        <header className="App-header">
          <img src={nyanCat} alt="Nyan Cat"/>
        </header>
      </div>
    </>
  );
}

export default App;
