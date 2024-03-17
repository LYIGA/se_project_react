import logo from "../../images/logo.svg";
import "./App.css";
import Header from "../Header/header.js";
import Main from "../Main/Main";
import Footer from "../Footer/footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import {useState} from "react";

function App() {
  const weatherTemp = "75°F";
  const [activeModal, setActiveModal] = useState('')
  const [selectedCard, setSelectedCard] = useState({})

  const handleCreateModal = () => {
    setActiveModal('create')
  }

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard =(card) => {
    setSelectedCard(card)
  }
  return (
    <div>
      <Header  onCreateModal={handleCreateModal}/>
      <Main weatherTemp={weatherTemp} onselectCard={handleSelectedCard}/>
      <Footer />
     {activeModal === 'create' && (
     <ModalWithForm title="New Garment" onClose={handleCloseModal}>
        <label>
          Name
          <input type="text" name="name" minLength="1" maxLength="30" />
          </label> 
          <label>
          Image
          <input type="url" name="link" minLength="1" maxLength="30" />
          </label>
          <p>Select the weather type:</p>
          <div>
            <div>
              <input type="radio" id="hot" value="hot" />
              <label>Hot</label>
            </div>
            <div>
              <input type="radio" id="warm" value="warm" />
              <label>Warm</label>
            </div>
            <div>
              <input type="radio" id="cold" value="cold" />
              <label>Cold</label>
            </div>
            </div> 
      </ModalWithForm>
      )}
      {activeModal === 'preview' &&
       <div className={`modal`}>
            <div className="modal__content">
              <img/>
              <div>Text for the Item name</div>
              <div>Weather type</div>
              </div> 
      </div>}
  </div>
  );
}

export default App;
