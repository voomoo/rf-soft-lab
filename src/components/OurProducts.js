import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import products from "../assets/images/products.png";

const OurProducts = () => {
  return (
    <div className="our-products">
      <Container>
        <h2>Our Products</h2>
        <p>Here’s what you get with every single RF plan.</p>
        <Row>
          <Col>
            <h4>
              <span>____</span>Products
            </h4>
            <h3>More ways to boost your Business!</h3>
            <p className="product-details">
              Take your idea and turn it into a polished digital product. Create
              courses, coaching programs, membership sites, podcasts,
              newsletters, communities, and more. Use our Product Blueprints to
              go from zero to launch quickly.
            </p>
            <Row>
              <Col className="d-grid gap-2">
                <Button>E-commerce</Button>
              </Col>
              <Col className="d-grid gap-2">
                <Button>ERP</Button>
              </Col>
              <Col className="d-grid gap-2">
                <Button>DMS</Button>
              </Col>
            </Row>
          </Col>
          <Col>
            <div className="products_img">
              <img src={products} alt="" />
              <div className="content-1">
                <h5>Plans</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.Here we have all thing.
                </p>
              </div>
              <div className="content-2">
                <h5>Prices</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.Here we have all thing.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurProducts;
