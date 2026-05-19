import "./index.css";
import menuData from "../../data/menu.js";
import MenuCard from "../MenuCard/index.jsx";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useFilter } from "../../context/FilterContext.jsx";
const Menu = () => {
  const navigate = useNavigate();
  const { category, type, search, selected, setSelected } = useFilter();
  const [selectedDish, setSelectedDish] = useState(null);
  const filteredMenu = menuData.filter((dish) => {
    return (
      dish.category === category &&
      dish.type === type &&
      dish.name.toLowerCase().includes(search.toLowerCase())
    );
  });
  const toggleid = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };
  const openPopUp = (dish) => setSelectedDish(dish);
  const closePopUp = () => setSelectedDish(null);
  const totalSelected = selected.length;
  const Ingredients = (dish) => {
    navigate("/ingredients", { state: dish });
  };
  return (
    <div className="menu">
      {filteredMenu.map((dish) => {
        const isSelected = selected.includes(dish.id);

        return (
          <div key={dish.id} className="menu-card">
            <div className="menu-details">
              <div className="menu-det">
                <h2 className="menu-title">{dish.name} </h2>
                <img className="menu-Fi" src={dish.foodIcon} />
              </div>
              <p className="menu-desc">{dish.description}</p>

              <div className="menu-ingr">
                <h4
                  className="menu-ingredients"
                  onClick={() => Ingredients(dish)}
                >
                  🧺 <span className="m-ing">Ingredients</span>
                </h4>
              </div>
            </div>

            <div className="menu-img">
              <img
                src={dish.imageUrl}
                alt={dish.name}
                className="m-img"
                onClick={() => openPopUp(dish)}
              />
              <button
                className={`m-btn ${isSelected ? "remove" : "add"}`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleid(dish.id);
                }}
              >
                {isSelected ? "Remove" : "Add"}
              </button>
            </div>
          </div>
        );
      })}
      {selectedDish && <MenuCard dish={selectedDish} closePopUp={closePopUp} />}
      <div className="menu-summary">
        <div className="menu-total">
          <p className="menu-total">Total Dish Selected {totalSelected}</p>
          <p>
            <span>&gt;</span>
          </p>
        </div>
        <hr />
        <div className="menu-continue">
          <button className="menu-ctn-btn">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
