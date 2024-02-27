const WeatherCard => {

    console.log('weather card')

    return(
        <section className='weather' id='weather'>
          <div className='weather_info'>75F</div>
          <img src={partlyCloudy} className='weather_image'></img>
        </section>
    )
}

export default WeatherCard;