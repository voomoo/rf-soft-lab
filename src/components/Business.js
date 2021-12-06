import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import business1 from "../assets/images/business1.png";
import business2 from "../assets/images/business2.png";

const Business = () => {
  return (
    <div className="business">
      <Container>
        <Row>
          <Col className="left">
            <h3>Your business before RF</h3>
            <img src={business2} alt="" />
          </Col>
          <Col className="right">
            <h3>Your business before RF</h3>
            <img src={business1} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Business;
