/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Form,
  Button,
  FormGroup,
  Label,
  Col,
  Input,
  FormFeedback,
} from "reactstrap";
import { Link } from "react-router-dom";

const FormContact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telnum, setTelnum] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [contactType, setContactType] = useState("Tel.");
  const [message, setMessage] = useState("");
  const [touched, setTouched] = useState({
    firstname: false,
    lastname: false,
    telnum: false,
    email: false,
  });

  const handleBlur = (field) => (event) => {
    setTouched({
      ...touched,
      [field]: true,
    });
  };

  const validate = (firstname, lastname, telnum, email) => {
    const errors = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
    };

    if (touched.firstname && firstname.length < 3) {
      errors.firstname = "First Name should be >= 3 characters";
    } else if (touched.firstname && firstname.length > 10) {
      errors.firstname = "First Name should be <= 10 characters";
    } else {
      //Do nothing
    }

    if (touched.lastname && lastname.length < 3) {
      errors.lastname = "Last Name should be >= 3 characters";
    } else if (touched.lastname && lastname.length > 10) {
      errors.lastname = "Last Name should be <= 10 characters";
    } else {
      //Do nothing
    }

    const reg = /^\d+$/;
    if (touched.telnum && !reg.test(telnum)) {
      errors.telnum = "Tel. Number should contain only numbers";
    } else {
      //Do nothing
    }

    if (
      touched.email &&
      email.split("").filter((x) => x === "@").length !== 1
    ) {
      errors.email = "Email should contain a @";
    } else {
      //Do nothing
    }

    return errors;
  };

  return (
    <React.Fragment>
      <div className="col-12">
        <h3>Send us your feedback</h3>
      </div>
      <div className="col-12 col-md-9">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <FormGroup row>
            <Label htmlFor="firstname" md={2}>
              First Name
            </Label>
            <Col md={10}>
              <Input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="First Name"
                value={firstName}
                valid={
                  validate(firstName, lastName, telnum, email).firstname === ""
                }
                invalid={
                  validate(firstName, lastName, telnum, email).firstname !== ""
                }
                onBlur={handleBlur("firstname")}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <FormFeedback>
                {validate(firstName, lastName, telnum, email).firstname}
              </FormFeedback>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="lastname" md={2}>
              Last Name
            </Label>
            <Col md={10}>
              <Input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Last Name"
                value={lastName}
                valid={
                  validate(firstName, lastName, telnum, email).lastname === ""
                }
                invalid={
                  validate(firstName, lastName, telnum, email).lastname !== ""
                }
                onBlur={handleBlur("lastname")}
                onChange={(e) => setLastName(e.target.value)}
              />
              <FormFeedback>
                {validate(firstName, lastName, telnum, email).lastname}
              </FormFeedback>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="telnum" md={2}>
              Contact Tel.
            </Label>
            <Col md={10}>
              <Input
                type="tel"
                id="telnum"
                name="telnum"
                placeholder="Tel. number"
                value={telnum}
                valid={
                  validate(firstName, lastName, telnum, email).telnum === ""
                }
                invalid={
                  validate(firstName, lastName, telnum, email).telnum !== ""
                }
                onBlur={handleBlur("telnum")}
                onChange={(e) => setTelnum(e.target.value)}
              />
              <FormFeedback>
                {validate(firstName, lastName, telnum, email).telnum}
              </FormFeedback>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="email" md={2}>
              Email
            </Label>
            <Col md={10}>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                valid={
                  validate(firstName, lastName, telnum, email).email === ""
                }
                invalid={
                  validate(firstName, lastName, telnum, email).email !== ""
                }
                onBlur={handleBlur("email")}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormFeedback>
                {validate(firstName, lastName, telnum, email).email}
              </FormFeedback>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md={{ size: 6, offset: 2 }}>
              <FormGroup check style={{ textAlign: "left" }}>
                <Label check>
                  <Input
                    type="checkbox"
                    name="agree"
                    value={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                  />
                  <strong>May we contact you?</strong>
                </Label>
              </FormGroup>
            </Col>
            <Col md={{ size: 3, offset: 1 }} style={{ textAlign: "right" }}>
              <Input
                type="select"
                name="contactType"
                value={contactType}
                onChange={(e) => setContactType(e.target.value)}
              >
                <option>Tel.</option>
                <option>Email</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="message" md={2}>
              Your Feedback
            </Label>
            <Col md={10}>
              <Input
                type="textarea"
                id="message"
                name="message"
                rows="12"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md={{ size: 10, offset: 2 }} style={{ textAlign: "left" }}>
              <Button type="submit" color="primary">
                Send Feedback
              </Button>
            </Col>
          </FormGroup>
        </Form>
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
