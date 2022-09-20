/* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useState } from "react";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  // Form,
  // Button,
  // FormGroup,
  // Label,
  // Col,
  // Input,
  // FormFeedback,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

const FormContact = () => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [telnum, setTelnum] = useState("");
  // const [email, setEmail] = useState("");
  // const [agree, setAgree] = useState(false);
  // const [contactType, setContactType] = useState("Tel.");
  // const [message, setMessage] = useState("");
  // const [touched, setTouched] = useState({
  //   firstname: false,
  //   lastname: false,
  //   telnum: false,
  //   email: false,
  // });

  //useFormik

  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length < 3) {
      errors.firstName = "First Name should be >= 3 characters";
    } else if (values.firstName.length > 10) {
      errors.firstName = "First Name should be <= 10 characters";
    } else {
      //Do nothing
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    } else if (values.lastName.length < 3) {
      errors.lastName = "Last Name should be >= 3 characters";
    } else if (values.lastName.length > 10) {
      errors.lastName = "Last Name should be <= 10 characters";
    } else {
      //Do nothing
    }

    const reg = /^\d+$/;
    if (!values.telnum) {
      errors.telnum = "Required";
    } else if (!reg.test(values.telnum)) {
      errors.telnum = "Tel. Number should contain only numbers";
    } else {
      //Do nothing
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    } else {
      //Do nothing
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      telnum: "",
      email: "",
      agree: false,
      contactType: "Tel.",
      message: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });

  // const handleBlur = (field) => (event) => {
  //   setTouched({
  //     ...touched,
  //     [field]: true,
  //   });
  // };

  return (
    <React.Fragment>
      <div className="col-12">
        <h3>Send us your feedback</h3>
      </div>
      <div className="col-12 col-md-9">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group row">
            <label className="col-md-2 col-form-label" htmlFor="firstName">
              First Name
            </label>
            <div className="col-12 col-md-10">
              <input
                className="form-control"
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.errors.firstName ? (
                <div>{formik.errors.firstName}</div>
              ) : null}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-2 col-form-label" htmlFor="lastName">
              Last Name
            </label>
            <div className="col-12 col-md-10">
              <input
                className="form-control"
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.errors.lastName ? (
                <div>{formik.errors.lastName}</div>
              ) : null}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-2 col-form-label" htmlFor="telnum">
              Contact Tel.
            </label>
            <div className="col-12 col-md-10">
              <input
                className="form-control"
                id="telnum"
                name="telnum"
                type="tel"
                placeholder="Tel. Num"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.telnum}
              />
              {formik.errors.telnum ? <div>{formik.errors.telnum}</div> : null}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-2 col-form-label" htmlFor="email">
              Email
            </label>
            <div className="col-10 col-md-10">
              <input
                className="form-control"
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.errors.email ? <div>{formik.errors.email}</div> : null}
            </div>
          </div>
          <div className="form-group row">
            <div className="col-md-6 offset-md-2">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="agree"
                  id="agree"
                  value={formik.values.agree}
                  onChange={formik.handleChange}
                />
                <label className="form-check-label" htmlFor="agree">
                  <strong>May we contact you?</strong>
                </label>
              </div>
            </div>
            <div className="col-md-3 offset-md-1">
              <select
                className="form-control"
                id="contactType"
                name="contactType"
                value={formik.values.contactType}
                onChange={formik.handleChange}
              >
                <option>Tel.</option>
                <option>Email</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-2 col-form-label" htmlFor="message">
              Your Feedback
            </label>
            <div className="col-md-10">
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="12"
                value={formik.values.message}
                onChange={formik.handleChange}
              ></textarea>
            </div>
          </div>
          <div className="form-group row">
            <div className="offset-md-2 col-md-10">
              <button type="submit" className="btn btn-primary">
                Send Feedback
              </button>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Contact Us</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Contact Us</h3>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h3>Location Information</h3>
        </div>
        <div className="col-12 col-sm-4 offset-sm-1">
          <h5>Our Address</h5>
          <address>
            121, Clear Water Bay Road
            <br />
            Clear Water Bay, Kowloon
            <br />
            HONG KONG
            <br />
            <i className="fa fa-phone"></i>: +852 1234 5678
            <br />
            <i className="fa fa-fax"></i>: +852 8765 4321
            <br />
            <i className="fa fa-envelope"></i>:{" "}
            <a href="mailto:confusion@food.net">confusion@food.net</a>
          </address>
        </div>
        <div className="col-12 col-sm-6 offset-sm-1">
          <h5>Map of our Location</h5>
        </div>
        <div className="col-12 col-sm-11 offset-sm-1">
          <div className="btn-group" role="group">
            <a
              role="button"
              className="btn btn-primary"
              href="tel:+85212345678"
            >
              <i className="fa fa-phone"></i> Call
            </a>
            <a href="#" role="button" className="btn btn-info">
              <i className="fa fa-skype"></i> Skype
            </a>
            <a
              role="button"
              className="btn btn-success"
              href="mailto:confusion@food.net"
            >
              <i className="fa fa-envelope-o"></i> Email
            </a>
          </div>
        </div>
      </div>
      <div className="row row-content">
        <FormContact />
      </div>
    </div>
  );
};

export default Contact;
