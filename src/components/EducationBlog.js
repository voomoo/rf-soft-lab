import React from "react";
import { Card, Button } from "react-bootstrap";
import cardImg from "../assets/images/card_img.png";

const EducationBlog = () => {
  return (
    <div className="education_blog">
      <Card>
        <Card.Img variant="top" src={cardImg} />
        <Card.Body>
          <Card.Text>
            <small>February 09, 2021</small>
            <span>Pandemic drives millions from Latin America’s</span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ...
          </Card.Text>
          <Button variant="link">Read More</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EducationBlog;
