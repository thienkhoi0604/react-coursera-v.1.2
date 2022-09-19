import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addComment } from "../redux/ActionCreators";

const CommentForm = ({ dishId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const validate = (values) => {
    const errors = {};

    if (!values.yourName) {
      errors.yourName = "Required";
    } else if (values.yourName.length < 3) {
      errors.yourName = "This field should at least be three characters long.";
    } else if (values.yourName.length >= 15) {
      errors.yourName = "Must be less than or equal to 15 characters.";
    } else {
      //Do nothing
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      rating: "1",
      yourName: "",
      comment: "",
    },
    validate,
    onSubmit: (values) => {
      dispatch(
        addComment(dishId, values.rating, values.yourName, values.comment)
      );
      console.log("submit");
    },
  });

  return (
    <React.Fragment>
      <Button
        outline
        color="secondary"
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        Submit Comment
      </Button>
      <Modal isOpen={isModalOpen} toggle={() => setIsModalOpen(!isModalOpen)}>
        <ModalHeader toggle={() => setIsModalOpen(!isModalOpen)}>
          Submit Comment
        </ModalHeader>
        <ModalBody>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label
                style={{ paddingLeft: 0 }}
                className="col-12"
                htmlFor="rating"
              >
                Rating
              </label>
              <select
                className="col-12 form-control"
                id="rating"
                name="rating"
                value={formik.values.rating}
                onChange={formik.handleChange}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
            </div>
            <div className="form-group">
              <label
                style={{ paddingLeft: 0 }}
                className="col-12 col-form-label"
                htmlFor="yourName"
              >
                Your name
              </label>
              <input
                className="form-control"
                type="text"
                id="yourName"
                name="yourName"
                placeholder="Your Name"
                value={formik.values.yourName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.yourName ? (
                <div style={{ color: "red", fontSize: "10px" }}>
                  {formik.errors.yourName}
                </div>
              ) : null}
            </div>
            <div className="form-group">
              <label
                style={{ paddingLeft: 0 }}
                className="col-12 col-form-label"
                htmlFor="comment"
              >
                Comment
              </label>
              <textarea
                className="form-control"
                id="comment"
                name="comment"
                rows="6"
                value={formik.values.comment}
                onChange={formik.handleChange}
              ></textarea>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

const CommentDishdetail = ({ comment }) => {
  return (
    <div>
      {comment.comment ? (
        <div>
          <p>{comment.comment}</p>
          <p>
            --{comment.author},{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            }).format(new Date(comment.date))}
          </p>
        </div>
      ) : (
        <div>No comment</div>
      )}
    </div>
  );
};

const Dishdetail = ({ dish, comments }) => {
  return dish ? (
    <div className="container">
      <div className="row" style={{ textAlign: "left" }}>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
        <div style={{ textAlign: "left" }} className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          {comments.map((comment) => {
            return (
              <div key={comment.id}>
                <CommentDishdetail comment={comment} />
              </div>
            );
          })}
          <CommentForm dishId={dish.id} />
        </div>
      </div>
    </div>
  ) : (
    <div>Bug</div>
  );
};

export default Dishdetail;
