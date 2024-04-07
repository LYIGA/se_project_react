import logo from "../../images/logo.svg";
import "./App.css";
import Header from "../Header/header.js";
import Main from "../Main/Main";
import Footer from "../Footer/footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";
import ItemModal from "../../ItemModal/ItemModal";
import { getForcastWeather, parseWeatherData } from "../util/WeatherApi";
import { currentTemperatureUnitContext} from "../contexts/currentTemperatureUnitContext"

function App() {
  const weatherTemp = "30";
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F');

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === 'C') setCurrentTemperatureUnit('F')
    if (currentTemperatureUnit === 'F') setCurrentTemperatureUnit('C')
  }
  useEffect(() => {
    getForcastWeather().then((data) => {
      console.log(data);
      const temperature = parseWeatherData(data);
      setTemp(temperature);
    });
  });

  return (
    <div>
      <currentTemperatureUnitContext.provider value={{currentTemperatureUnit, handleToggleSwitchChange}}>
      <Header onCreateModal={handleCreateModal} />
      <Main weatherTemp={temp} onselectCard={handleSelectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title='New Garment' onClose={handleCloseModal}>
          <label className='modal__label'>
            Name
            <input
              className='modal__input'
              placeholder='Name'
              type='text'
              name='name'
              minLength='1'
              maxLength='30'
            />
          </label>
          <label className='modal__label'>
            Image
            <input
              className='modal__input'
              placeholder='Image URL'
              type='url'
              name='link'
              minLength='1'
            />
          </label>
          <p className='modal__weather-type'>Select the weather type:</p>
          <div className='modal__radio'>
            <div>
              <input type='radio' id='hot' value='hot' />
              <label>Hot</label>
            </div>
            <div>
              <input type='radio' id='warm' value='warm' />
              <label>Warm</label>
            </div>
            <div>
              <input type='radio' id='cold' value='cold' />
              <label>Cold</label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
      </currentTemperatureUnitContext.provider>
    </div>
  );
}

export default App;
