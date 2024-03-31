import { useState } from "react";
import "./ModalWithForm.css";
import closeIcon from "../../images/close1.svg";

const ModalWithForm = ({
  children,
  buttonText = "Add garment",
  title,
  onClose,
  name,
}) => {
  console.log("ModalWithForm");

  return (
    <div className={`modal modal_type_${name}`}>
      <div className='modal__content'>
        <button className='modal__close1' type='button' onClick={onClose}>
          <img src={closeIcon}></img>
        </button>

        <h3 className='modal__title'> {title}</h3>
        <form className='modal__form'>{children}</form>
        <button type='submit'> {buttonText}</button>
      </div>
    </div>
  );
};

export default ModalWithForm;
