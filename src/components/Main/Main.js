import {defaultClothingItems} from "../util/constants";
import WeatherCard from "../../WeatherCard/weatherCard";
import ItemCard from "../ItemCard/ItemCard";

function Main({weatherTemp, onselectCard}) {
    return <main className='main'>
      <WeatherCard day={false} type='storm' weatherTemp={weatherTemp}/>
      <section className='card_section' id='card section'>
        Today is {weatherTemp} / You may want to wear:
        <div className='card_items'>
          {defaultClothingItems.map((item, index) => (
            <ItemCard item={item} onselectCard={onselectCard}/>
          ))}
        </div>
      </section>
    </main>;
}

export default Main