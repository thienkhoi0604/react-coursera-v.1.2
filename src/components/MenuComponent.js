import React, { useState } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import Dishdetail from "./DishdetailComponent";

const Menu = ({ dishes }) => {
  const [selectedDish, setSelectedDish] = useState(null);

  const onDishSelect = (dish) => {
    setSelectedDish(dish);
  };

  const menu = dishes.map((dish) => {
    return (
      <div
        key={dish.id}
        className="col-12 col-md-5 m-1"
        style={{ color: "black" }}
      >
        <Card onClick={() => onDishSelect(dish)}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">{menu}</div>

      {selectedDish && <Dishdetail dish={selectedDish} />}
    </div>
  );
};

export default Menu;
