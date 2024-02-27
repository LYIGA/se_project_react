const weatherOptions = [
 {url:"/images/day/sunny.svg", day: true, type: "sunny"},
 {url:"/images/day/cloudy.svg", day: true, type: "cloudy"},
 {url:"/images/night/cloud.svg", day: false, type: "cloud"},
 {url:"/images/night/moon.svg", day: false, type: "moon"},
];

const WeatherCard = ({day, type}) => {
console.log('weather card')
    const imgSrc = weatherOptions.filter(( i) => {
        return i.day === day && i.type === type
    })

    const imgSrcurl = imgSrc[0].url || ""
    return(
        <section className='weather' id='weather'>
          <div className='weather_info'>75F</div>
          <img src={imgSrcurl} className='weather_image'></img>
        </section>
    );
}

export default WeatherCard;