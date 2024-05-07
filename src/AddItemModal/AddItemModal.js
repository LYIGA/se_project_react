import React, { useState } from "react";
import ModalWithForm from "../components/ModalWithForm/ModalWithForm .js.";

const AddItemModal =({handleCloseModal, onAddItem, isOpen}) => {
    const [ name,SetName] = useState("")
    const handleNamechange =(e) => {
        console.log(e.target.value)
        SetName (e.target.value)
    }

    const [ url,SetUrl] = useState("")
    const handleUrlchange =(e) => {
        console.log(e.target.value)
        SetName (e.target.value)
    }

const handleSubmit = (e) => {
    e.prevenDefault();
    onAddItem({name, url})
    };


    return(
        <ModalWithForm title='New Garment'
         onClose={handleCloseModal} 
         isOpen={isOpen}
          onSubmit={handleSubmit}
          >
        <label className='modal__label'>
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
    )
}

export default AddItemModal;