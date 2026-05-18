import "./index.css";

const MenuCard = ({ dish, closePopUp }) => {
  return (
    <div className="mc-overlay" onClick={closePopUp}>
      
      <div className="MenuCard" onClick={(e) => e.stopPropagation()}>
        
        <button className="mc-close-btn" onClick={closePopUp}>
          X
        </button>

        <img src={dish.imageUrl} alt={dish.name} className="mc-img" />

        <h2>{dish.name}</h2>
        <p>{dish.description}</p>

        <div className="popup-ingredients">
          {dish.ingredients.map((item, index) => (
            <p key={index}>
              {item.name} - {item.quantity}
            </p>
          ))}
        </div>

      </div>
    </div>
  );
};

export default MenuCard;