import "./index.css";
import menuData from "../../data/menu.js";
import MenuCard from "../MenuCard/index.jsx";
import { useState } from "react";

const Menu = () => {

  const [selected, setSelected] = useState([]);
  const [selectedDish, setSelectedDish] = useState(null);

  const toggleid = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((d) => d !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const openPopUp = (dish) => {
    setSelectedDish(dish);
  };

  const closePopUp = () => {
    setSelectedDish(null);
  };

  return (
    <div className="menu">

      {menuData.map((dish) => {
        const isSelected = selected.includes(dish.id);

        return (
          <div
            className="menu-card"
            key={dish.id}
            onClick={() => openPopUp(dish)}
          >
            <div className="menu-details">
              <h2 className="menu-title">{dish.name}</h2>
              <p className="menu-desc">{dish.description}</p>

              <div className="menu-ingr">
                <details>
                  <summary>Ingredients</summary>
                  {dish.ingredients.map((item, index) => (
                    <p key={index}>
                      {item.name} - {item.quantity}
                    </p>
                  ))}
                </details>
              </div>
            </div>

            <div className="menu-img">
              <img
                src={dish.imageUrl}
                alt={dish.name}
                className="m-img"
              />

              <button
                className={`m-btn ${isSelected ? "remove" : "add"}`}
                onClick={(e) => {
                  e.stopPropagation();   // prevents popup when clicking button
                  toggleid(dish.id);
                }}
              >
                {isSelected ? "Remove" : "Add"}
              </button>
            </div>

          </div>
        );
      })}
      {selectedDish && (
        <MenuCard dish={selectedDish} closePopUp={closePopUp} />
      )}

    </div>
  );
};

export default Menu;