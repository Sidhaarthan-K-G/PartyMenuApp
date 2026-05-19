import "./index.css";
import { useNavigate } from "react-router-dom";
const MenuCard = ({ dish, closePopUp }) => {
  const navigate = useNavigate();
  const goToIngredients = (dish) => {
    navigate("/ingredients", { state: dish });
  };
  return (
    <div className="mc-overlay" onClick={closePopUp}>
      <div className="MenuCard" onClick={(e) => e.stopPropagation()}>
        <button className="mc-close-btn" onClick={closePopUp}>
          X
        </button>

        <img src={dish.imageUrl} alt={dish.name} className="mc-img" />

        <div className="menu-det">
          <h2 className="menu-title">{dish.name} </h2>
          <img className="menu-Fi" src={dish.foodIcon} />
        </div>
        <p>{dish.description}</p>

        <p
          className="mc-ingredients-link"
          onClick={() => goToIngredients(dish)}
        >
          🧺 <span className="m-ing">Ingredients</span>
        </p>
      </div>
    </div>
  );
};

export default MenuCard;
