import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Ingredients from "./components/IngredientsList";
import { FilterProvider } from "./context/FilterContext";
const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <FilterProvider>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Menu />
                </>
              }
            />
            <Route path="/ingredients" element={<Ingredients />} />
          </Routes>
        </FilterProvider>
      </div>
    </BrowserRouter>
  );
};

export default App;
