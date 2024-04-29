import { Link } from "react-router-dom";
import avatar from "../../images/avatar.png";
import logo from "../../images/logo.svg";
import ToggleSwitch from "../../ToggleSwitch/ToggleSwitch";
import "./header.css";

function Header({onCreateModal}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      <header className='header'>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}>
          <img style={{ marginRight: "24px" }} src={logo} alt='logo' />
          <div>{currentDate}</div>
        </div>
        <div className='header__avatar-logo'>
          <ToggleSwitch/>
          <div>
            <button type='text' onClick={onCreateModal}>Add New Clothes</button>
          </div>
          <Link to="/profile">Smith Akin</Link>
          <div>
            <Link to="/">
            <img src={avatar} alt='logo' />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
