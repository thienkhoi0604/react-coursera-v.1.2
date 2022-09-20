import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";

const MenuItem = ({ dish }) => {
  return (
    <Card>
      <Link to={`/menu/${dish.id}`}>
        <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
};

const Menu = ({ dishes, dishesLoading, dishesErrMess }) => {
  if (dishesLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (dishesErrMess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>{dishesErrMess}</h4>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Menu</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          {dishes.map((dish) => {
            return (
              <div
                key={dish.id}
                className="col-12 col-md-5 m-1"
                style={{ color: "black" }}
              >
                <MenuItem dish={dish} />;
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Menu;
