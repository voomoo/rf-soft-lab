import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BuiltForCard from "./BuiltForCard";

const BuiltFor = () => {
  return (
    <div className="built-for">
      <Container>
        <Row>
          <Col>
            <BuiltForCard
              title="Small Companies"
              details="Get your company equipped with the 
                        best technology"
              number="01"
            />
          </Col>
          <Col>
            <BuiltForCard
              title="Large Companies"
              details="Get your company with over 1000 people equipped with the best technology"
              number="02"
            />
          </Col>
          <Col>
            <BuiltForCard
              title="Staffing Agencies"
              details="Get your Staffing agency equipped with the 
                        best technology"
              number="03"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BuiltFor;
