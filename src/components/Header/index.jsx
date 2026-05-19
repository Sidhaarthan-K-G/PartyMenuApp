import "./index.css";
import { FaSearch, FaCircle } from "react-icons/fa";
import { useState } from "react";
import { useFilter } from "../../context/FilterContext";
import menuData from "../../data/menu";
const Header = () => {
  const { category, setCategory, type, setType, search, setSearch, selected } =
    useFilter();
  const categoryCount = selected.filter((id) => {
    const dish = menuData.find((d) => d.id === id);
    return dish && dish.category === category;
  }).length;
  return (
    <div className="header">
      <div className="h-search-container">
        <input
          type="search"
          className="h-input"
          placeholder="Search dish for your party...   🔍"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="h-categories">
        <button
          className={`h-btn ${category === "Starter" ? "active" : ""}`}
          type="button"
          onClick={() => {
            setCategory("Starter");
          }}
        >
          Starter
        </button>
        <button
          className={`h-btn ${category === "Main Course" ? "active" : ""}`}
          type="button"
          onClick={() => {
            setCategory("Main Course");
          }}
        >
          Main Course
        </button>
        <button
          className={`h-btn ${category === "Dessert" ? "active" : ""}`}
          type="button"
          onClick={() => {
            setCategory("Dessert");
          }}
        >
          Desert
        </button>
        <button
          className={`h-btn ${category === "Sides" ? "active" : ""}`}
          type="button"
          onClick={() => {
            setCategory("Sides");
          }}
        >
          Sides
        </button>
      </div>
      <div className="h-toggle">
        <p className="h-category-selected">
          {category} selected ({categoryCount})
        </p>
        <div className="h-toggle-container">
          <div
            className={`toggle-box ${type === "veg" ? "veg-active" : ""}`}
            onClick={() => setType("veg")}
          >
            <div className="toggle-circle veg"></div>
          </div>

          <div
            className={`toggle-box ${type === "nonveg" ? "nonveg-active" : ""}`}
            onClick={() => setType("nonveg")}
          >
            <div className="toggle-circle nonveg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
