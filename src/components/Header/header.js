import avatar from "../../images/avatar.png";
import logo from "../../images/logo.svg";
import "./header.css";

function Header() {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      <header className='header'>
        {/* <div className='header__logo'></div> */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}>
          <img style={{ marginRight: "24px" }} src={logo} alt='logo' />
          <div>{currentDate}</div>
        </div>
        {/* <div></div> */}
        <div className='header__avatar-logo'>
          <div>
            <button type='text'>Add New Clothes</button>
          </div>
          <div>Name</div>
          <div>
            <img src={avatar} alt='logo' />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
