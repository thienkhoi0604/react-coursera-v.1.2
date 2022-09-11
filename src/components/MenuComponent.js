import React, { useState } from "react";
import { Media } from "reactstrap";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

const Menu = ({ dishes }) => {
  const [selectedDish, setSelectedDish] = useState(null);

  const onDishSelect = (dish) => {
    setSelectedDish(dish);
  };

  const renderDish = (dish) => {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
  };

  const menu = dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
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
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {selectedDish && renderDish(selectedDish)}
        </div>
      </div>
    </div>
  );
};

export default Menu;
