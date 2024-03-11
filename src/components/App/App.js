import logo from "../../images/logo.svg";
import "./App.css";
import Header from "../Header/header.js";
import Main from "../Main/Main";
import Footer from "../Footer/footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function App() {
  const weatherTemp = "75°F";
  return (
    <div>
      <Header />
      <Main weatherTemp={weatherTemp}/>
      <Footer />
      <ModalWithForm /> These are the children<ModalWithForm/>
    </div>
  );
}

export default App;
