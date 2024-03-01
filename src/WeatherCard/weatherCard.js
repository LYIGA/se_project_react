const weatherOptions = [
  { url: require("../images/day/sunny.svg"), day: true, type: "sunny" },
  { url: require("../images/day/cloudy.svg"), day: true, type: "cloudy" },
  { url: require("../images/day/rain.svg"), day: true, type: "rain" },
  { url: require("../images/day/storm.svg"), day: true, type: "storm" },
  { url: require("../images/day/snow.svg"), day: true, type: "snow" },
  { url: require("../images/day/fog.svg"), day: true, type: "fog" },
  { url: require("../images/night/moon.svg"), day: false, type: "moon" },
  { url: require("../images/night/cloudy.svg"), day: false, type: "cloudy" },
  { url: require("../images/night/rain.svg"), day: false, type: "rain" },
  { url: require("../images/night/storm.svg"), day: false, type: "storm" },
  { url: require("../images/night/dew.svg"), day: true, type: "dew" },
  { url: require("../images/night/fog.svg"), day: true, type: "fog" },
];

const WeatherCard = ({ day, type }) => {
  console.log("weather card");
  const imgSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imgSrcurl = imgSrc[0].url.default || "";
  
  return (
    <section className='weather' id='weather'>
      <div className='weather_info'>75F</div>
      <img src={imgSrcurl} className='weather_image'></img>
    </section>
  );
};

export default WeatherCard;
