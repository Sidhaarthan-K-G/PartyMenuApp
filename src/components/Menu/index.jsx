import "./index.css";
import menuData from "../../data/menu.js";
import MenuCard from "../MenuCard/index.jsx";
import { useState } from "react";
import { useFilter } from "../../context/FilterContext.jsx";
const Menu = () => {
  const { category, type, search, selected, setSelected } = useFilter();
  const [selectedDish, setSelectedDish] = useState(null);
  const filteredMenu = menuData.filter((dish) => {
    return(
      dish.category === category && dish.type === type && dish.name.toLowerCase().includes(search.toLowerCase())
    )
  });
  const toggleid = (id) => {
    setSelected((prev) => prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id])
  };

  const openPopUp = (dish) => setSelectedDish(dish);
  const closePopUp = () => setSelectedDish(null);

  return (
    <div className="menu">
      {filteredMenu.map((dish) => {
        const isSelected = selected.includes(dish.id);

        return (
          <div
            key={dish.id}
            className="menu-card"
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
              <img src={dish.imageUrl} alt={dish.name} className="m-img" />

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
    </div>
  );
};

export default Menu;
