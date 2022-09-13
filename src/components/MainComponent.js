// import logo from "./logo.svg";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { DISHES } from "../shared/dishes";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";

function Main() {
  const [dishes, setDishes] = useState(DISHES);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route exact path="/menu" element={<Menu dishes={dishes} />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Main;
