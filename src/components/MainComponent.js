// import logo from "./logo.svg";
import { useState } from "react";
import { DISHES } from "../shared/dishes";
import Menu from "./MenuComponent";
import Dishdetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

function Main() {
  const [dishes, setDishes] = useState(DISHES);
  const [selectedDish, setSelectedDish] = useState(null);

  const onDishSelect = (dishId) => {
    setSelectedDish(dishId);
  };

  return (
    <div>
      <Header />
      <Menu dishes={dishes} onClick={(dishId) => onDishSelect(dishId)} />
      <Dishdetail
        dish={dishes.filter((dish) => dish.id === selectedDish)[0]}
      ></Dishdetail>
      <Footer />
    </div>
  );
}

export default Main;
