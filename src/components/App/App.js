import avatar from "../../images/avatar.png";
import logo from "../../images/logo.svg";
import "./App.css";
import Header from "../Header/header.js";
import partlyCloudy from "../../images/partlyCloudy.svg";
import WeatherCard from "../../WeatherCard/weatherCard";

function App() {
  return (
    <div>
      <Header />
      <main>
        <WeatherCard/>
        {/* <section className='weather' id='weather'>
          <div className='weather_info'>75F</div>
          <img src={partlyCloudy} className='weather_image'></img>
        </section> */}
        <section id='card section'>card section</section>
      </main>
    </div>
  );
}

export default App;
