const ItemModal = ({selectedCard}) => {

    console.log('item modal')

    return (
        <div className={`modal`}>
        <div className="modal__content">
          <img src={selectedCard.link} />
          <div> {selectedCard.name}</div>
          <div>Weather type: {selectedCard.weather}</div>
          </div>
          </div> 
    )
}

export default ItemModal;