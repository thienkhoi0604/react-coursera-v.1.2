// import logo from "./logo.svg";
import { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { DISHES } from "../shared/dishes";
import Menu from "./MenuComponent";
import Dishdetail from "./DishdetailComponent";

function Main() {
  const [dishes, setDishes] = useState(DISHES);
  const [selectedDish, setSelectedDish] = useState(null);

  const onDishSelect = (dishId) => {
    setSelectedDish(dishId);
  };

  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={dishes} onClick={(dishId) => onDishSelect(dishId)} />
      <Dishdetail
        dish={dishes.filter((dish) => dish.id === selectedDish)[0]}
      ></Dishdetail>
    </div>
  );
}

export default Main;
