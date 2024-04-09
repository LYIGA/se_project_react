import {defaultClothingItems} from "../util/constants";
import WeatherCard from "../../WeatherCard/weatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo, useContext } from "react";
import {CurrentTemperatureUnitContext} from "../contexts/CurrentTemperatureUnitContext"

function Main({weatherTemp, onselectCard}) {

  const {currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext)
const weatherType =useMemo(() => {
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999
    if (weatherTemp >= 86) {
      return 'hot';
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return 'warm';
    } else if (weatherTemp <= 65) {
      return 'cold';
    }
  },[weatherTemp]);

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType
  });
  

    return <main className='main'>
      <WeatherCard day={false} type='storm' weatherTemp={Temp}/>
      <section className='card_section' id='card section'>
        Today is {Temp} / You may want to wear:
        <div className='card_items'>
          {filteredCards.map((item) => (
            <ItemCard item={item} onselectCard={onselectCard}/>
          ))}
        </div>
      </section>
    </main>;
}

export default Main