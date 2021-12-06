import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import cardImg from "../assets/images/card_img.png";

const News = () => {
  return (
    <div className="news">
      <Container>
        <h2>Our Services</h2>
        <p>Our solution is equipped with everything you need to succeed!</p>
        <Row>
          <Col>
            <Card style={{ width: "18rem", margin: "0 auto" }}>
              <Card.Img variant="top" src={cardImg} />
              <Card.Body>
                <small>February 09, 2021</small>
                <Card.Title>Domestic staffing 101</Card.Title>
                <Card.Text style={{ margin: "0px", textAlign: "left" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ...
                </Card.Text>
                <Button
                  variant="primary"
                  style={{ margin: "0 auto", display: "block" }}
                >
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem", margin: "0 auto" }}>
              <Card.Img variant="top" src={cardImg} />
              <Card.Body>
                <small>February 09, 2021</small>
                <Card.Title>Domestic staffing 101</Card.Title>
                <Card.Text style={{ margin: "0px", textAlign: "left" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ...
                </Card.Text>
                <Button
                  variant="primary"
                  style={{ margin: "0 auto", display: "block" }}
                >
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem", margin: "0 auto" }}>
              <Card.Img variant="top" src={cardImg} />
              <Card.Body>
                <small>February 09, 2021</small>
                <Card.Title>Domestic staffing 101</Card.Title>
                <Card.Text style={{ margin: "0px", textAlign: "left" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ...
                </Card.Text>
                <Button
                  variant="primary"
                  style={{ margin: "0 auto", display: "block" }}
                >
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default News;
