import React from "react";
import {
  InputGroup,
  Button,
  Container,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <InputGroup className="mb-3 subscribe">
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Subscribe Now
          </Button>
        </InputGroup>
        <Row>
          <Col>
            <img src={logo} alt="" />
            <p className="pitch">
              Your trustworthy company to build services or transform your
              existing systems to the next level.
            </p>
            <div className="social-links"></div>
          </Col>
          <Col>
            <h5>Info</h5>
            <div className="info">
              <a href="#">Info 1</a>
              <a href="#">Info 2</a>
              <a href="#">Info 3</a>
            </div>
          </Col>
          <Col>
            <h5>Quick Links</h5>
            <div className="quick-links">
              <a href="#">Pricing</a>
              <a href="#">User Guide</a>
              <a href="#">Contact</a>
            </div>
          </Col>
          <Col>
            <h5>Contact Us</h5>
            <div className="address">
              <h6>Paris, France</h6>
              <h6>03994884948</h6>
              <h6> admin@email.com</h6>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
