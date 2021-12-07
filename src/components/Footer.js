import React from "react";
import { Form, Button, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Form className="subscribe">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Your email address" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Subscribe Now
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Footer;
