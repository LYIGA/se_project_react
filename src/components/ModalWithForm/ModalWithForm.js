import { useState } from "react";
import "./ModalWithForm.css";
import closeIcon from "../../images/close1.svg";

const ModalWithForm = ({
  children,
  buttonText = "Add garment",
  title,
  onClose,
  name,
  isOpen,
  onSubmit,
}) => {
  console.log("ModalWithForm");

  return (
    <div className={`modal modal_type_${name} ${isOpen ? 'modal_opened' : ''}`}>
      <div className='modal__content'>
        <button className='modal__close1' type='button' onClick={onClose}>
          <img src={closeIcon}></img>
        </button>

        <h3 className='modal__title'> {title}</h3>
        <form className='modal__form' onSubmit={onSubmit}>{children}
        <button type='submit'> {buttonText}</button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;