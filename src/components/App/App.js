import logo from "../../images/logo.svg";
import "./App.css";
import Header from "../Header/header.js";
import Main from "../Main/Main";
import Footer from "../Footer/footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm.js";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForcastWeather, parseWeatherData } from "../../utils/WeatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";
import { Switch, Route } from "react-router-dom";
import AddItemModal from "../AddItemModal/AddItemModal";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import { defaultClothingItems } from "../../utils/constants.js";
import { addItems, getItems } from "../../utils/Api";

function App() {
  const weatherTemp = "30";
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

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

  const onAddItem = (values) => {
    // e.preventDefault ();
    console.log(values);

    addItems({
      name: "Max was here",
      weather: "hot",
      imageUrl:
        "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
    }).then((item) => {
      console.log(item);
    });
  };

  const handleAddNewGarment = () => {
    setActiveModal("add-garment");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleCloseClick = () => {};

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };
  useEffect(() => {
    getForcastWeather().then((data) => {
      console.log(data);
      const temperature = parseWeatherData(data);
      setTemp(temperature);
    }).catch(error => console.error(error));

    getItems().then((items) => {
      console.log(items);
    }).catch(error => console.error(error));
  }, []);

  return (
    <div>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}>
        <Header onCreateModal={handleCreateModal} temp={temp} />
        <Switch>
          <Route exact path='/'>
            <Main weatherTemp={temp} onselectCard={handleSelectedCard} />
          </Route>
          <Route path='/profile'>
            <div style={{ display: "flex" }}>
              <SideBar />
              <ClothesSection
                handleCardClick={handleCardClick}
                clothingItems={defaultClothingItems}
                handleAddNewGarment={handleAddNewGarment}
              />
            </div>
          </Route>
        </Switch>

        <Footer />

        <AddItemModal
          handleCloseModal={handleCloseModal}
          isOpen={activeModal === "create"}
          onAddItem={onAddItem}
        />
        {/* {activeModal === "create" && <AddItemModal
       handleCloseModal={handleCloseModal}
        isOpen={activeModal=== "create"} 
        onAddItem={onAddItem}/>} */}
        {activeModal === "preview" && (
          <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
