import "./Menu.css";
import heart from "./images/heart.png";

function Menu() {

  // handle image click
  // function onLogoClick() {
  //   console.log('Image clicked');
  // }

  function onNameClick() {
    console.log('Name button clicked');
  }

  // component html export
  return (
    <>
      <header className="Top-menu">
        <div className="Dropdown">
          <button className="Links">
            <img src={heart} className="Heart-logo" alt="heart" />
          </button>
        </div>
        <button onClick={onNameClick} className="Name">Jackson Buchmeyer</button>
      </header>
    </>
  )

}

export default Menu;