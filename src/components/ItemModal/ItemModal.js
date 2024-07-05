const ItemModal = ({selectedCard, onClose}) => {

    console.log('item modal')

    return (
        <div className={`modal`}>
        <div className="modal__content">
        <button className="modal__close" type="button" onClick={onClose}>
                </button>
          <img src={selectedCard.link} />
          <div> {selectedCard.name}</div>
          <div>Weather type: {selectedCard.weather}</div>
          </div>
          </div> 
    )
}

export default ItemModal;