import {defaultClothingItems} from "../util/constants";
import WeatherCard from "../../WeatherCard/weatherCard";
import ItemCard from "../ItemCard/ItemCard";

function Main({weatherTemp}) {
    return <main className='main'>
      <WeatherCard day={false} type='storm' />
      <section className='card_section' id='card section'>
        Today is {weatherTemp} / You may want to wear:
        <div className='card_items'>
          {defaultClothingItems.map((item, index) => (
            <ItemCard item={item} key={index} />
          ))}
        </div>
      </section>
    </main>;
}

export default Main