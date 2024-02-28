import avatar from "../../images/avatar.png";
import logo from "../../images/logo.svg";
import "./App.css";
import Header from "../Header/header.js";
// import day from "../../images/day/suuny.svg";
import WeatherCard from "../../WeatherCard/weatherCard";

function App() {
  return (
    <div>
      <Header />
      <main>
        <WeatherCard day={true} type='sunny' />
        {/* <WeatherCard day={true} type='cloudy' />
        <WeatherCard day={true} type='rain' />
        <WeatherCard day={true} type='storm' />
        <WeatherCard day={true} type='fog' />
        <WeatherCard day={true} type='snow' /> */}

        <section id='card section'>card section</section>
      </main>
    </div>
  );
}

export default App;
