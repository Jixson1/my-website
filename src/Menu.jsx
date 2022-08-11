import "./Menu.css";
import heart from "./images/heart.png";

function Menu() {

  // handling dropdown menu
  document.addEventListener('click', e => {
    const isDropDownButton = e.target.matches('[data-dropdown-button]');
    if (!isDropDownButton && e.target.closest('[data-dropdown]') != null) return;
    
    let currentDropdown
    if (isDropDownButton) {
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
      if (dropdown === currentDropdown) return;
      dropdown.classList.remove('active');
    });
  })

  // component html export
  return (
    <>
      <header className="Top-menu">
        <div className="Dropdown" data-dropdown>
          <button className="Links" data-dropdown-button>
            <img src={heart} className="Heart-logo" alt="heart" />
          </button>
          <div className="Dropdown-menu">
            Dropdown Content
          </div>
        </div>
      </header>
    </>
  )

}

export default Menu;