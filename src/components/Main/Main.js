import { defaultClothingItems } from "../../utils/constants";
import WeatherCard from "../WeatherCard/weatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo, useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function Main({ weatherTemp, onselectCard }) {
  console.log(weatherTemp);
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  console.log(currentTemperatureUnit);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999;
  const weatherType = useMemo(() => {
    if (weatherTemp >= 86) {
      return "hot";
    } else if (temp >= 66 && temp <= 85) {
      return "warm";
    } else if (temp <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });
  console.log(weatherTemp, temp);
  return (
    <main className='main'>
      <WeatherCard day={false} type='storm' weatherTemp={temp} />
      <section className='card_section' id='card section'>
        Today is {temp} / You may want to wear:
        <div className='card_items'>
          {filteredCards.map((item, index) => (
            <ItemCard item={item} key={index} onselectCard={onselectCard} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
