import "./App.css";
import Menu from "./Menu.jsx";
import nyanCat from "./images/nyan-cat.gif";

export default function App() {

  // component html export
  return (
    <>
      <title>Jackson Buchmeyer</title>
      <div className="App">
        <Menu />
        <header className="App-header">
          <img src={nyanCat} alt="Nyan Cat" className="Nyan-cat"/>
        </header>
      </div>
    </>
  );
}
