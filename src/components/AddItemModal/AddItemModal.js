import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.js";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  const [name,setName] = useState("");
  const handleNamechange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [url, setUrl] = useState("");
  const handleUrlchange = (e) => {
    console.log(e.target.value);
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, url });
  };

  return (
    <ModalWithForm
      title='New Garment'
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}>
      <label className='modal__label' htmlFor="name-input">
        Name
        <input
          className='modal__input'
          placeholder='Name'
          type='text'
          name='name'
          minLength='1'
          maxLength='30'
          value={name}
          onChange={handleNamechange}
          id="name-input"
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
          maxLength='30'
          value={url}
          onChange={handleUrlchange}
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
  );
};

export default AddItemModal;
