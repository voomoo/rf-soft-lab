import React from "react";
import { Container } from "react-bootstrap";

const BuiltForCard = ({ title, details, number }) => {
  return (
    <div className="built-for-card">
      <Container>
        <h5>BUILT FOR</h5>
        <h4>{title}</h4>
        <p>{details}</p>
        <h3>{number}</h3>
      </Container>
    </div>
  );
};

export default BuiltForCard;
