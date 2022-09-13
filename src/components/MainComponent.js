// import logo from "./logo.svg";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { DISHES } from "../shared/dishes";
import { PROMOTIONS } from "../shared/promotions";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";

function Main() {
  const [dishes, setDishes] = useState(DISHES);
  const [promotions, setPromotions] = useState(PROMOTIONS);
  const [comments, setComments] = useState(COMMENTS);
  const [leaders, setLeaders] = useState(LEADERS);

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/home"
          element={
            <Home
              dish={dishes.filter((dish) => dish.featured)[0]}
              promotion={
                promotions.filter((promotion) => promotion.featured)[0]
              }
              leader={leaders.filter((leader) => leader.featured)[0]}
            />
          }
        />
        <Route exact path="/menu" element={<Menu dishes={dishes} />} />
        <Route exact path="/contactus" element={<Contact />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Main;
