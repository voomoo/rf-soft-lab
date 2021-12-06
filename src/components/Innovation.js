import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import EducationBlog from "./EducationBlog";

const Innovation = () => {
  return (
    <div className="innovation">
      <Container>
        <h3>Educational Innovation</h3>
        <p>We rank the best courses on the web</p>
        <Row className="align-items-center">
          <Col>
            <h2>All The Features You Need In One Place!</h2>
            <h6>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </h6>
            <Button>Educational Innovation</Button>
          </Col>
          <Col className="d-flex justify-content-end">
            <iframe
              title="video"
              src="https://www.youtube.com/embed/DzL4RpHnY44"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Col>
        </Row>
        <Row>
          <Col>
            <EducationBlog />
          </Col>
          <Col>
            <EducationBlog />
          </Col>
          <Col>
            <EducationBlog />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Innovation;
