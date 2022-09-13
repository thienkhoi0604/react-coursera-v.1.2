import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const MenuItem = ({ dish, onClick }) => {
  return (
    <Card onClick={() => onClick(dish.id)}>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
};

const Menu = ({ dishes, onClick }) => {
  return (
    <div className="container">
      <div className="row">
        {dishes.map((dish) => {
          return (
            <div
              key={dish.id}
              className="col-12 col-md-5 m-1"
              style={{ color: "black" }}
            >
              <MenuItem dish={dish} onClick={onClick} />;
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
