import React from "react";
import { Card, Button } from "react-bootstrap";
import team1 from "../assets/images/team1.png";

const TeamCard = () => {
  return (
    <div className="team-card">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={team1} />
        <Card.Body>
          <Card.Text className="text-center">John Doe</Card.Text>
          <Card.Text className="text-center">MD,RF.</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TeamCard;
