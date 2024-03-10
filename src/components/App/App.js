import logo from "../../images/logo.svg";
import "./App.css";
import Header from "../Header/header.js";
import Main from "../Main/Main";
import Footer from "../Footer/footer";

function App() {
  const weatherTemp = "65°F";
  return (
    <div>
      <Header />
      <Main weatherTemp={weatherTemp}/>
      <footer />
    </div>
  );
}

export default App;
