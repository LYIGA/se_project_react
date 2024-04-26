import avatar from "../../images/avatar.png"
import "./SideBar.css"
function SideBar () {
    return (
    <div className="Text">
        <img src={avatar} alt='logo' />
        <p>Name</p>
    </div>
    )
}

export default SideBar;