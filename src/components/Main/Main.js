import {defaultClothingItems} from "../util/constants";
import WeatherCard from "../../WeatherCard/weatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo } from "react";

function Main({weatherTemp, onselectCard}) {
const weatherType =useMemo(() => {
    if (weatherTemp >= 86) {
      return 'hot';
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return 'warm';
    } else if (weatherTemp <= 65) {
      return 'cold';
    }
  },[weatherTemp]);
 
  console.log(weatherType)

  const filteredCards = defaultClothingItems.filter((item) => {
    console.log(item)
    return item.weather.toLowerCase() === weatherType
  })
  console.log(filteredCards)

    return <main className='main'>
      <WeatherCard day={false} type='storm' weatherTemp={weatherTemp}/>
      <section className='card_section' id='card section'>
        Today is {weatherTemp} / You may want to wear:
        <div className='card_items'>
          {filteredCards.map((item) => (
            <ItemCard item={item} onselectCard={onselectCard}/>
          ))}
        </div>
      </section>
    </main>;
}

export default Main