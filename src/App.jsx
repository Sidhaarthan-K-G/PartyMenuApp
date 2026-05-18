import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";
const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <Menu />
      </div>
    </BrowserRouter>
  );
};

export default App;
