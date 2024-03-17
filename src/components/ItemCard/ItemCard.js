const ItemCard = ({ item, onselectCard }) => {
  return (
    <div>

      <div>
        <img src={item.link} className="card_image" onClick={() => onselectCard(item)} />
      </div>
      <div className='card_name'>{item.name}</div>
    </div>
  );
};

export default ItemCard;
