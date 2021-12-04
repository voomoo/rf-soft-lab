import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import heroImage from "../assets/images/hero_img_1.png";
import square from "../assets/images/square.svg";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Container>
        <Row>
          <Col className="hero-text">
            <Container fluid>
              <p>Move to the next level</p>
              <h3>
                BETTER Software <br /> is to make the COMPLEX <br /> appear to
                be SIMPLE
              </h3>
              <h6>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h6>
              <Button>Get Started</Button>
            </Container>
          </Col>
          <Col className="hero-img">
            <img src={heroImage} alt="hero" />
          </Col>
        </Row>
      </Container>

      <img className="hero-square" src={square} alt="" />
    </div>
  );
};

export default HeroSection;
