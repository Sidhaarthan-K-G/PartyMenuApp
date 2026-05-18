import "./index.css";
import { FaSearch, FaCircle } from "react-icons/fa";
import { BsSquare, BsDot } from "react-icons/bs";
import { useState } from "react";
const Header = () => {
  const [category, setCategory] = useState("");
  return (
    <div className="header">
      <div className="h-search-container">
        <input
          type="search"
          className="h-input"
          placeholder="Search dish for your party..."
        />

        <FaSearch className="h-search" />
      </div>
      <div className="h-categories">
        <button
          className="h-btn"
          type="button"
          onClick={() => {
            setCategory("Starter");
          }}
        >
          Starter
        </button>
        <button
          className="h-btn"
          type="button"
          onClick={() => {
            setCategory("Main Course");
          }}
        >
          Main Course
        </button>
        <button
          className="h-btn"
          type="button"
          onClick={() => {
            setCategory("Desert");
          }}
        >
          Desert
        </button>
        <button
          className="h-btn"
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
          {category ? `${category} Selected()` : ""}
        </p>
        <div className="h-toggle-container">
          <button className="h-v-btn">
            <FaCircle className="h-veg"/>
          </button>
          <button className="h-n-btn">
            <FaCircle className="h-nonveg"/>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
