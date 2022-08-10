import "./Menu.css";
import heart from "./images/heart.png";

function Menu() {

  // handle image click
  function onLogoClick() {
    console.log('Image clicked');
  }

  function onNameClick() {
    console.log('Name button clicked');
  }

  return (
    <>
      <header className="Top-menu">
        <div onClick={onLogoClick} className="Heart-logo-div">
          <img src={heart} className="Heart-logo" alt="heart" />
        </div>
        <button onClick={onNameClick} className="Name">Jackson Buchmeyer</button>
      </header>
    </>
  )

}

export default Menu;