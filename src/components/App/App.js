import avatar from "../../images/avatar.png";
import logo from "../../images/logo.svg";
import "./App.css";
import Header from "../Header/header.js";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section className="weather" id="weather">
        <div className="weather_info">75F</div>
        <img src="/images/day/sunny.svg" className="weather_image"></img>
        </section>
        <section id="card section">
          card section
        </section>
      </main>
    </div>
  );
}

export default App;
