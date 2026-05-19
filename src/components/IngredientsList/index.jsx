import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/ingredients.png";
import './index.css'
const Ingredients = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dish = location.state;
  if (!dish) {
    return <h3>No dish data found</h3>;
  }
  return (
    <div className="ingredients">
      <h2 style={{cursor: "pointer"}} onClick={() => navigate("/")}>
        <span>&lt;</span> Ingredient List
      </h2>
      <hr />
      <div className="ingredients-container">
        <div className="ingr-desc">
          <h2 className="ingr-title">{dish.name}</h2>
          <h3 className="ingr-description">{dish.description}</h3>
          <br />
          <h2 className="ingr-desc">Ingredients</h2>
          <p className="ingr-person">For 2 people</p>
        </div>
        <div className="ingr-logo">
          <img src={Logo} alt={dish.name} className="ingr-image" />
        </div>
      </div>
      <hr />
      {dish.ingredients.map((item, index) => (
        <div className="ingr-details">
          <p key={index} className="ingr-det">
            {item.name} 
          </p>
          <p key={index} className="ingr-det">
            {item.quantity}
          </p>
        </div>
      ))}
    </div>
  );
};
export default Ingredients;
