import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import aboutImg from "../assets/images/about_img.png";

const About = () => {
  return (
    <div className="about">
      <Container>
        <Row className="align-items-center">
          <Col>
            <h6>
              <span>____</span>About
            </h6>
            <h2>All The Features You Need In One Place!</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Col>
          <Col className="d-flex justify-content-end">
            <img src={aboutImg} alt="about" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
