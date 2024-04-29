import avatar from "../../images/avatar.png"
import "./SideBar.css"
function SideBar () {
    return (
    <div className="Profile">
        <img className="profile__image" src={avatar} alt='logo' />
        <p className="Profile__name">Smith Akin</p>
    </div>
    )
}

export default SideBar;