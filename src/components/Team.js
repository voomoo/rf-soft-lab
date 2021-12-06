import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import TeamCard from "./TeamCard";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
};
const Team = () => {
  return (
    <div className="team">
      <Container>
        <h2>Our Services</h2>
        <p>Our solution is equipped with everything you need to succeed!</p>
        <Slider {...settings}>
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </Slider>
      </Container>
    </div>
  );
};

export default Team;
